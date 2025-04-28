import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createRoutesStub,
  useActionData,
  useLoaderData,
  useMatches,
  useParams,
} from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Route } from "./+types/home";

import Home from "./home";

type Action = (
  args: Route.ActionArgs,
) =>
  | Promise<Route.ComponentProps["actionData"]>
  | Route.ComponentProps["actionData"];

const action = vi.fn<Action>();

const Stub = createRoutesStub([
  {
    action,
    Component: () => (
      <Home
        actionData={useActionData()}
        loaderData={useLoaderData()}
        matches={useMatches() as Route.ComponentProps["matches"]}
        params={useParams()}
      />
    ),
    loader: (): Route.ComponentProps["loaderData"] => ({
      guestBook: [{ id: 1, name: "Jane Teacher" }],
      message: "Hello from Cloudflare",
    }),
    path: "/",
  },
]);

async function renderPage() {
  render(<Stub />);
  await screen.findByRole("main");
}

it("renders loader data", async () => {
  await renderPage();

  const navMenu = await screen.findByRole("navigation");
  expect(
    within(navMenu).getByText("Hello from Cloudflare"),
  ).toBeInTheDocument();

  const guestBook = screen.getAllByRole("list").at(-1);
  assertIsDefined(guestBook);

  expect(
    within(guestBook).getByText("Hello from Cloudflare"),
  ).toBeInTheDocument();

  expect(within(guestBook).getByText("Jane Teacher")).toBeInTheDocument();
});

describe("when the user submits the completed form", () => {
  it("sends form data to the action", async () => {
    const user = userEvent.setup();

    await renderPage();

    await user.type(
      screen.getByRole("textbox", { name: "Name" }),
      "Jane Teacher",
    );

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "jane.teacher@school.edu",
    );

    await user.click(screen.getByRole("button", { name: "Sign Guest Book" }));

    expect(action).toHaveBeenCalledOnce();
    const call = action.mock.calls[0];
    const { request } = call[0];
    const formData = await request.formData();
    expect(formData.get("name")).toBe("Jane Teacher");
    expect(formData.get("email")).toBe("jane.teacher@school.edu");

    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue(""),
    );
  });

  describe("when there is an error adding the user to the guest book", () => {
    it("renders the error", async () => {
      action.mockReturnValue({
        guestBookError: "Error adding to guest book",
      });
      const user = userEvent.setup();

      await renderPage();

      await user.type(
        screen.getByRole("textbox", { name: "Name" }),
        "Jane Teacher",
      );

      await user.type(
        screen.getByRole("textbox", { name: "Email" }),
        "jane.teacher@school.edu",
      );

      await user.click(screen.getByRole("button", { name: "Sign Guest Book" }));

      await waitFor(() =>
        expect(
          screen.getByText("Error adding to guest book"),
        ).toBeInTheDocument(),
      );
    });
  });
});

describe("while the action is still processing", () => {
  beforeEach(() => {
    action.mockReturnValue(
      new Promise(() => {
        // Do not resolve.
      }),
    );
  });

  it("disables the submit button", async () => {
    const user = userEvent.setup();

    await renderPage();

    await user.type(
      screen.getByRole("textbox", { name: "Name" }),
      "Jane Teacher",
    );

    await user.type(
      screen.getByRole("textbox", { name: "Email" }),
      "jane.teacher@school.edu",
    );

    const submitButton = screen.getByRole("button", {
      name: "Sign Guest Book",
    });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  describe("when the user fills out and submits the form again", () => {
    beforeEach(() => {
      // The browser is slow enough for the user to be able to resubmit the form
      // before an animation frame allows React to clear the form.
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    });

    // This test covers an edge case in which the button fails to disable after
    // the first time the user submits the form. This might be excessive, but
    // the current intention of these tests is to build coverage of all existing
    // functionality, and I have been unable to devise a more reasonable test
    // which fails without the call to `event.preventDefault()` on submission
    // of the form in welcome.tsx.
    //
    // We may want to remove this check, or add analytics to see if it ever
    // successfully blocks submission spamming.
    it("only submits the form once", async () => {
      const user = userEvent.setup();

      await renderPage();

      const nameField = screen.getByRole("textbox", { name: "Name" });
      await user.type(nameField, "Jane Teacher");

      const emailField = screen.getByRole("textbox", { name: "Email" });
      await user.type(emailField, "jane.teacher@school.edu");

      const submitButton = screen.getByRole<HTMLButtonElement>("button", {
        name: "Sign Guest Book",
      });
      await user.click(submitButton);
      submitButton.disabled = false;
      await user.click(submitButton);

      expect(action).toHaveBeenCalledOnce();
    });
  });
});

function assertIsDefined<TValue>(
  value: TValue | undefined,
): asserts value is TValue {
  if (value === undefined) {
    throw new Error("Value should be defined");
  }
}
