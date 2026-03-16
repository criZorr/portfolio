(() => {
  const d = document,
    $html = d.querySelector("html"),
    $body = d.querySelector("body"),
    $main = d.querySelector(".principal");

  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "auto");
  if (!localStorage.getItem("wide")) localStorage.setItem("wide", "standard");
  if (!localStorage.getItem("size")) localStorage.setItem("size", "normal");

  let theme = localStorage.getItem("theme");
  let wide = localStorage.getItem("wide");
  let fontSize = localStorage.getItem("size");

  const manageFont = (size) => {
    let sndSize = "sm",
      trdSize = "lg";

    if (size == "sm") sndSize = "lg";
    if (size == "lg") sndSize = "sm";

    if (size !== "normal") $main.classList.add(`font-${size}`);
    $main.classList.remove(`font-${sndSize}`);
    if (size == "normal") $main.classList.remove(`font-${trdSize}`);
  };

  const manageWide = (value) => {
    if (value == "wide") {
      $body.classList.add("wide");
    } else {
      $body.classList.remove("wide");
    }
  };

  const manageColor = (color) => {
    let sndColor = "os",
      trdColor = "dark";

    if (color == "dark") trdColor = "light";
    if (color == "os") sndColor = "light";

    $html.classList.add(`color-${color}`);
    $html.classList.remove(`color-${sndColor}`);
    $html.classList.remove(`color-${trdColor}`);
  };

  if (theme == "auto") d.querySelector("#auto").checked = "true";

  if (theme == "light") {
    d.querySelector("#light").checked = "true";
    manageColor("light");
  }

  if (theme == "dark") {
    d.querySelector("#dark").checked = "true";
    manageColor("dark");
  }

  if (wide == "standard") d.querySelector("#standard").checked = "true";

  if (wide == "wide") {
    d.querySelector("#wide").checked = "true";
    manageWide("wide");
  }

  if (fontSize == "normal") d.querySelector("#medium").checked = "true";

  if (fontSize == "sm") {
    d.querySelector("#small").checked = "true";
    manageFont("sm");
  }

  if (fontSize == "lg") {
    d.querySelector("#large").checked = "true";
    manageFont("lg");
  }

  d.addEventListener("change", (e) => {
    let id = e.target.id;

    if (id == "light") {
      manageColor("light");
      localStorage.setItem("theme", "light");
    }

    if (id == "dark") {
      manageColor("dark");
      localStorage.setItem("theme", "dark");
    }

    if (id == "auto") {
      manageColor("os");
      localStorage.setItem("theme", "auto");
    }

    if (id == "wide") {
      manageWide("wide");
      localStorage.setItem("wide", "wide");
    }

    if (id == "standard") {
      manageWide("standard");
      localStorage.setItem("wide", "standard");
    }

    if (id == "small") {
      manageFont("sm");
      localStorage.setItem("size", "sm");
    }

    if (id == "medium") {
      manageFont("normal");
      localStorage.setItem("size", "normal");
    }

    if (id == "large") {
      manageFont("lg");
      localStorage.setItem("size", "lg");
    }
  });
})();
