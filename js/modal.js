(() => {
  const toggle = () => {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("scroll-hidden");
  };
  openModalBtn.addEventListener("click", toggle);
  closeModalBtn.addEventListener("click", toggle);
})();
