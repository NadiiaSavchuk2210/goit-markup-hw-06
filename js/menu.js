(() => {
  const refs = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-menu на бекдроп menu
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.menu.classList.toggle("is-open");
  }
})();
