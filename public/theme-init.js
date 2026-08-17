(function () {
  try {
    var root = document.documentElement;
    var defaultTheme = "system";

    var resolveTheme = function (themeValue) {
      if (!themeValue || themeValue === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return themeValue;
    };

    var savedTheme = localStorage.getItem("data-theme");
    var resolvedTheme = resolveTheme(savedTheme);
    root.setAttribute("data-theme", resolvedTheme);

    var configKeys = [
      "brand",
      "accent",
      "neutral",
      "solid",
      "solid-style",
      "border",
      "surface",
      "transition",
      "scaling",
    ];
    configKeys.forEach(function (key) {
      var value = localStorage.getItem("data-" + key);
      if (value) {
        root.setAttribute("data-" + key, value);
      }
    });
  } catch (e) {
    console.error("Failed to initialize theme:", e);
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
