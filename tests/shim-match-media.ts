// We don't need to completely mock matchMedia, so we will declare a lot of
// empty blocks in this file.
/* eslint-disable @typescript-eslint/no-empty-function */

if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query) => ({
    addEventListener: () => {},
    addListener: () => {},
    dispatchEvent: () => false,
    matches: true,
    media: query,
    onchange: () => {},
    removeEventListener: () => {},
    removeListener: () => {},
  });
}
