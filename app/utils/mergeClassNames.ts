export function mergeClassNames(
  ...classNames: [ClassNames, ClassNames, ...ClassNames[]]
): ClassNames {
  const result = classNames
    .filter((className) => className && className.length > 0)
    .join(" ")
    .replace(/\s\s+/g, " ")
    .trim();

  if (result.length === 0) {
    return undefined;
  }

  return result;
}

type ClassNames = string | undefined;

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;

  it("concatenates class names", () => {
    expect(mergeClassNames("font-bold", "font-extrabold")).toBe(
      "font-bold font-extrabold",
    );
  });

  it("excludes empty class names", () => {
    expect(mergeClassNames("font-bold", "", "font-extrabold")).toBe(
      "font-bold font-extrabold",
    );
  });

  it("excludes undefined class names", () => {
    expect(mergeClassNames("font-bold", undefined, "font-extrabold")).toBe(
      "font-bold font-extrabold",
    );
  });

  it("returns undefined when the result is a empty", () => {
    expect(mergeClassNames("", "")).toBeUndefined();
  });

  it("trims class names", () => {
    expect(mergeClassNames(" font-bold", "font-extrabold  center ")).toBe(
      "font-bold font-extrabold center",
    );
  });
}
