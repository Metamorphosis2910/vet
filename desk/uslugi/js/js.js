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
    
  
  document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
  }