import { createExecutionContext, env } from "cloudflare:test";
import { getLoadContext } from "load-context";
import { describe, expect, it, vi } from "vitest";

import { guestBook } from "~/database/schema";

import { action, loader } from "./home";

it("loads the guestbook and message", async () => {
  const executionContext = createExecutionContext();
  const request = new Request("http://example.com");
  const loadContext = getLoadContext({
    context: { cloudflare: { ctx: executionContext, env } },
    request,
  });
  await loadContext.db
    .insert(guestBook)
    .values({ email: "jane.teacher@school.edu", name: "Jane Teacher" });
  const result = await loader({
    context: loadContext,
    params: {},
    request,
  });

  expect(result.guestBook).toEqual([{ id: 1, name: "Jane Teacher" }]);
  expect(result.message).toBe("Hello from Cloudflare");
});

describe("when the user submits the completed form", () => {
  it("adds the submission to the guest book", async () => {
    const executionContext = createExecutionContext();
    const body = new FormData();
    body.set("name", "Jane Teacher");
    body.set("email", "jane.teacher@school.edu");
    const request = new Request("http://example.com", { body, method: "POST" });
    const loadContext = getLoadContext({
      context: { cloudflare: { ctx: executionContext, env } },
      request,
    });

    await action({
      context: loadContext,
      params: {},
      request,
    });

    expect(
      await loadContext.db.query.guestBook.findMany({
        columns: { email: true, name: true },
      }),
    ).toEqual([{ email: "jane.teacher@school.edu", name: "Jane Teacher" }]);
  });

  describe("when there is an unexpected error adding the user to the guest book", () => {
    it("responds with a generic error message", async () => {
      const executionContext = createExecutionContext();
      const body = new FormData();
      body.set("name", "Jane Teacher");
      body.set("email", "jane.teacher@school.edu");
      const request = new Request("http://example.com", {
        body,
        method: "POST",
      });
      const loadContext = getLoadContext({
        context: { cloudflare: { ctx: executionContext, env } },
        request,
      });
      vi.spyOn(loadContext.db, "insert").mockImplementation(() => {
        throw new Error();
      });

      const result = await action({
        context: loadContext,
        params: {},
        request,
      });

      expect(result).toEqual({ guestBookError: "Error adding to guest book" });
    });
  });
});

(["email", "name"] as const).forEach((field) => {
  describe(`when the user omits their ${field}`, () => {
    it("response with an instructive error message", async () => {
      const executionContext = createExecutionContext();
      const body = new FormData();
      if (field !== "name") {
        body.set("name", "Jane Teacher");
      }
      if (field !== "email") {
        body.set("email", "jane.teacher@school.edu");
      }
      const request = new Request("http://example.com", {
        body,
        method: "POST",
      });
      const loadContext = getLoadContext({
        context: { cloudflare: { ctx: executionContext, env } },
        request,
      });

      const result = await action({
        context: loadContext,
        params: {},
        request,
      });

      expect(result).toEqual({
        guestBookError: "Name and email are required",
      });
    });
  });

  describe(`when the user provides an empty ${field}`, () => {
    it("responds with an instructive error message", async () => {
      const executionContext = createExecutionContext();
      const body = new FormData();
      body.set("name", field === "name" ? "" : "Jane Teacher");
      body.set("email", field === "email" ? "" : "jane.teacher@school.edu");
      const request = new Request("http://example.com", {
        body,
        method: "POST",
      });
      const loadContext = getLoadContext({
        context: { cloudflare: { ctx: executionContext, env } },
        request,
      });

      const result = await action({
        context: loadContext,
        params: {},
        request,
      });

      expect(result).toEqual({
        guestBookError: "Name and email are required",
      });
    });
  });
});
