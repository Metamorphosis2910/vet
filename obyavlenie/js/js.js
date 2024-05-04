//   document.addEventListener("contextmenu", function (e){
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

/* ******************** */
/* Скрипт изображения начало */

document.addEventListener('DOMContentLoaded', function() {
    // Переменная для хранения модального окна
    const modal = document.querySelector('.carousel-pop_up');

    // Обработчик события клика для открытия модального окна
    document.querySelectorAll('.carousel-item img').forEach(img => {
        img.onclick = () => {
            modal.style.display = 'block';
            modal.querySelector('img').src = img.getAttribute('src');
        }
    });

    // Обработчик события клика для закрытия модального окна при клике вне изображения или по хедеру
    document.addEventListener('click', function(event) {
        // Проверка, что клик был совершен вне изображения и не на хедере
        if (!event.target.closest('img') && !event.target.closest('header')) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const expandBtn = document.querySelector('.expand-btn');
    const expandableContent = document.querySelector('.expandable-content');

    expandBtn.addEventListener('click', function() {
        if (expandableContent.offsetHeight === 0) {
            expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
            expandableContent.style.overflowY = 'visible'; // Изменение стиля overflow-y
            expandBtn.innerHTML = '<span>Свернуть</span><span class="expand-icon"><img src="../icons/Vector 188.png" alt=""></span>';
        } else {
            expandableContent.style.maxHeight = '0';
            expandableContent.style.overflowY = 'hidden'; // Изменение стиля overflow-y
            expandBtn.innerHTML = '<span>Развернуть</span><span class="expand-icon"><img src="../icons/Vector 188.png" alt=""></span>';
        }
    });
});



  







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
    