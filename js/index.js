(() => {
  // ============== mnu ===============
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;

    menuBtn.setAttribute("aria-expanded", !expanded);
    menuBtn.classList.toggle("is-open");
    menuContainer.classList.toggle("is-open");
    document.body.classList.toggle("scroll-hidden");
  });

  // =============== modal ================
  const toggle = () => {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("scroll-hidden");
  };
  openModalBtn.addEventListener("click", toggle);
  closeModalBtn.addEventListener("click", toggle);

  // =========== form listener ============
  // form.addEventListener("submit", evt => {
  //   evt.preventDefault();
  //   console.log("---------------");
  //   new FormData(evt.currentTarget).forEach((value, name) =>
  //     console.log(`${name}:${value}`)
  //   );
  // });
  // e.currentTarget.reset();
})();
