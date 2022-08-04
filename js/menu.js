(() => {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;

    menuBtn.setAttribute("aria-expanded", !expanded);
    menuBtn.classList.toggle("is-open");
    menuContainer.classList.toggle("is-open");
    document.body.classList.toggle("scroll-hidden");
  });
})(); 
