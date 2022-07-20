(() => {
  const menu_btn = document.querySelector("#menu_btn");
  menu_btn.addEventListener("click", () => {
    const expanded = menu_btn.getAttribute("aria-expanded") === "true" || false;

    menu_btn.setAttribute("aria-expanded", !expanded);
    menu_btn.classList.toggle("is-open");
    menu_container.classList.toggle("is-open");
    document.body.classList.toggle("scroll-hidden");
  });
})();
