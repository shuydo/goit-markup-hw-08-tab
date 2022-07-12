(() => {
  // const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnRef = document.querySelector(".menu-button");
  // console.log("menuBtnRef: ", menuBtnRef);

  // const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuRef = document.querySelector("#menu-container");
  // console.log("mobileMenuRef: ", mobileMenuRef);

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
