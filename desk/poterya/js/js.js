function hamDropdown() {
    document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
   }
   
   window.onclick = function(e) {
     if (!e.target.matches('.nut_dropdown')) {
     var noiDungDropdown = document.querySelector(".noidung_dropdown");
       if (noiDungDropdown.classList.contains('hienThi')) {
         noiDungDropdown.classList.remove('hienThi');
       }
     }
   }

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
    