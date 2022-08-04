(() => {
  form.addEventListener("submit", evt => {
    evt.preventDefault();
    new FormData(evt.currentTarget).forEach((value, name) =>
      console.log(`${name}:${value}`)
    );
  });
  // e.currentTarget.reset();
})();
