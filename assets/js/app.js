import Navigation from "./modules/navBar.js";

document.addEventListener("DOMContentLoaded", function () {
  const navigation = new Navigation(
    ".navLinks",
    ".navBarExpandButton",
    "main",
    ".mainBlurMask"
  );
});
