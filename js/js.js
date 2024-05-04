


// document.addEventListener("contextmenu", function (e){
//     e.preventDefault();
// }, false);

// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'CTRL'.charCodeAt(0)){
//     return false;
//   }
//   }
// document.addEventListener('DOMContentLoaded', function() {
//   var navToggle = document.getElementById('nav-toggle');
//   var body = document.querySelector('body');
//   var scrollPosition = 0;

//   navToggle.addEventListener('change', function() {
//       if (this.checked) {
//           scrollPosition = window.pageYOffset;
//           body.style.position = 'fixed';
//           body.style.width = '100%';
//           body.style.top = `-${scrollPosition}px`;
//       } else {
//           body.style.position = '';
//           body.style.width = '';
//           body.style.top = '';
//           window.scrollTo(0, scrollPosition); // Восстанавливаем прокрутку
//       }
//   });
// });

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  window.addEventListener('scroll', function() {
    var btnBackToTop = document.querySelector('.btn-back-to-top');
    var mainContent = document.querySelector('main');
    var footer = document.querySelector('footer');
    var mainBottom = mainContent.getBoundingClientRect().bottom;

    if (window.scrollY > 20) {
      btnBackToTop.style.display = 'block';
    } else {
      btnBackToTop.style.display = 'none';
    }

    if (mainBottom <= window.innerHeight + 20) { // 20 - запас, чтобы кнопка не заходила на футер
      btnBackToTop.style.bottom = mainBottom - window.innerHeight - 20 + 'px';
    } else {
      btnBackToTop.style.bottom = '20px';
    }
  });