(() => {
  const d = document,
    $html = d.querySelector("html"),
    $body = d.querySelector("body"),
    $main = d.querySelector(".principal"),
    $options = d.querySelector(".right-nav"),
    $menu = d.querySelector(".menu"),
    $details = d.querySelectorAll("details"),
    $specialInput = d.querySelector("#special"),
    $specialImg = d.querySelector(".special-img"),
    $censoredList = d.querySelectorAll(".bg-censored"),
    $modalBtn = d.querySelectorAll(".to-modal"),
    $modalBtnClose = d.querySelector(".close-modal"),
    $modal = d.querySelector(".modal"),
    $furinaVideo = d.querySelector(".furina"),
    mediaQuery = window.matchMedia("(min-width: 64em)");

  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "auto");
  if (!localStorage.getItem("wide")) localStorage.setItem("wide", "standard");
  if (!localStorage.getItem("size")) localStorage.setItem("size", "normal");

  let theme = localStorage.getItem("theme");
  let wide = localStorage.getItem("wide");
  let fontSize = localStorage.getItem("size");
  let censoredArray = Array.from($censoredList);

  const specialChecked = () => {
    if ($specialInput.checked) {
      $specialImg.setAttribute("src", "./assets/special-active.webp");
      censoredArray.forEach((e) => {
        e.classList.add("bg-uncensored");
        e.classList.remove("bg-censored");
      });
    }
    if (!$specialInput.checked) {
      $specialImg.setAttribute("src", "./assets/special.webp");
      censoredArray.forEach((e) => {
        e.classList.add("bg-censored");
        e.classList.remove("bg-uncensored");
      });
    }
  };

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

  specialChecked();

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

  $modalBtnClose.addEventListener("click", () => {
    $furinaVideo.pause();
    $furinaVideo.currentTime = 0;
    $modal.style.display = "none";
  });

  $modalBtn.forEach((e) => {
    e.addEventListener("click", () => {
      $furinaVideo.currentTime = 1;
      $furinaVideo.play();
      $modal.style.display = "flex";
      setTimeout(() => {
        $modalBtnClose.style.opacity = "1";
      }, 441);
      setTimeout(() => {
        $modalBtnClose.style.pointerEvents = "all";
      }, 30441);
    });
  });

  mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      $details.forEach((e) => {
        e.setAttribute("open", "");
      });
    }
  });

  $menu.addEventListener("click", () => {
    let state = $options.style.display;
    if (state == "" || state == "none") {
      $options.style.display = "block";
    } else {
      $options.style.display = "none";
    }
  });

  $specialInput.addEventListener("change", () => specialChecked());

  d.addEventListener("click", (e) => {
    let state = $options.style.display,
      className = e.target.className;

    if (
      e.target.classList[0] !== "icon" &&
      state == "block" &&
      !mediaQuery.matches
    ) {
      if (className == "special-img" || className == "special-input") {
        setTimeout(() => {
          $options.style.display = "none";
        }, 250);
      } else {
        $options.style.display = "none";
      }
    }
  });

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

  console.error("¿Qué haces aquí, sapo?");
})();
