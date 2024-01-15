document.addEventListener('click', function (event) {
  const burgerMenu = document.getElementById('navbarToggleExternalContent');
  const burgerButton = document.querySelector('.navbar-toggler');

  // Если клик был вне бургер-меню и кнопки, то закрываем меню
  if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
    const isMenuOpen = burgerMenu.classList.contains('show');
    
    if (isMenuOpen) {
      // Используем jQuery для закрытия бургер-меню
      $(burgerButton).click();
    }
  }
});
