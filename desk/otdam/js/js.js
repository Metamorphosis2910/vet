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

// Получаем все кнопки dropdown-button в dropdown-menu1
const dropdownButtons = document.querySelectorAll('.dropdown-menu1 .dropdown-button');

// Добавляем обработчики для кнопок dropdown-button в dropdown-menu1
dropdownButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Находим родительский элемент dropdown
        const dropdown = button.closest('.dropdown');
        
        // Находим связанный с кнопкой dropdown-menu2
        const dropdownMenu2 = dropdown.querySelector('.dropdown-menu2');

        // Проверяем, есть ли у dropdown-menu2 inline-стиль display
        const isMenu2Visible = dropdownMenu2.style.display === 'block';

        // Если dropdown-menu2 уже открыт, то скрываем его
        if (isMenu2Visible) {
            dropdownMenu2.style.display = 'none';
        } else {
            // Иначе показываем dropdown-menu2
            dropdownMenu2.style.display = 'block';
            dropdownMenu2.style.top = ''; // Сбрасываем значение top, чтобы использовать CSS-правило
        }

        // Предотвращаем действие по умолчанию для кнопки
        event.preventDefault();
        event.stopPropagation();
    });
});

// Получаем все кнопки dropdown-button2 в dropdown-menu2
const dropdownButtons2 = document.querySelectorAll('.dropdown-menu2 .dropdown-button2');

// Добавляем обработчики для кнопок dropdown-button2 в dropdown-menu2
dropdownButtons2.forEach(button => {
    button.addEventListener('click', function(event) {
        // Находим родительский элемент dropdown
        const dropdown = button.closest('.dropdown');
        
        // Находим связанный с кнопкой dropdown-menu3
        const dropdownMenu3 = dropdown.querySelector('.dropdown-menu3');

        // Проверяем, есть ли у dropdown-menu3 inline-стиль display
        const isMenu3Visible = dropdownMenu3.style.display === 'block';

        // Если dropdown-menu3 уже открыт, то скрываем его
        if (isMenu3Visible) {
            dropdownMenu3.style.display = 'none';
        } else {
            // Иначе показываем dropdown-menu3
            dropdownMenu3.style.display = 'block';
            dropdownMenu3.style.top = ''; // Сбрасываем значение top, чтобы использовать CSS-правило
        }

        // Предотвращаем действие по умолчанию для кнопки
        event.preventDefault();
        event.stopPropagation();
    });
});

// Получаем все dropdown-submenu в dropdown-menu2
const dropdownSubmenus = document.querySelectorAll('.dropdown-menu2 .dropdown-submenu');

// Добавляем обработчики для dropdown-submenu в dropdown-menu2
dropdownSubmenus.forEach(submenu => {
    submenu.addEventListener('click', function(event) {
        // Предотвращаем скрытие dropdown-menu2
        event.stopPropagation();
    });
});

// Получаем все dropdown-submenu в dropdown-menu3
const dropdownMenu3Submenus = document.querySelectorAll('.dropdown-menu3 .dropdown-submenu');

// Добавляем обработчики для dropdown-submenu в dropdown-menu3
dropdownMenu3Submenus.forEach(submenu => {
    submenu.addEventListener('click', function(event) {
        // Предотвращаем скрытие dropdown-menu3
        event.stopPropagation();
    });
});

// Получаем все дропдауны
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик клика для каждого дропдауна
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        // Отменяем стандартное поведение (закрытие дропдауна при клике)
        event.stopPropagation();
    });
});

// Получаем все ссылки в dropdown-menu1
const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu1 a');

// Добавляем обработчики для ссылок в dropdown-menu1
dropdownMenuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Если родитель элемента не имеет класса "dropdown", значит это вложенное меню
        const isDropdown = link.closest('.dropdown');

        // Если это не кнопка dropdown-button и нет класса "dropdown", предотвращаем открытие dropdown-menu2
        if (!link.classList.contains('dropdown-button') && !isDropdown) {
            event.stopPropagation();
            event.preventDefault();
        }
    });
});

// Добавляем обработчик клика для закрытия дропдауна при клике вне его области
document.addEventListener('click', function(event) {
    // Проверяем, является ли цель клика дропдауном или его потомком
    const isDropdown = event.target.closest('.dropdown');
    
    // Если цель клика не является дропдауном или его потомком, закрываем все дропдауны
    if (!isDropdown) {
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu1');
            dropdownMenu.style.display = 'none';

            // Очищаем стили для dropdown-menu2 и dropdown-menu3
            const dropdownMenu2 = dropdown.querySelector('.dropdown-menu2');
            dropdownMenu2.style.display = '';
            const dropdownMenu3 = dropdown.querySelector('.dropdown-menu3');
            dropdownMenu3.style.display = '';
        });
    }
});

// Добавляем обработчик события transitionend для dropdown-menu2 и dropdown-menu3
dropdowns.forEach(dropdown => {
    const dropdownMenu2 = dropdown.querySelector('.dropdown-menu2');
    if (dropdownMenu2) {
        dropdownMenu2.addEventListener('transitionend', function() {
            // Удаляем класс show только после полного скрытия dropdown-menu2
            if (dropdownMenu2.style.display === 'none') {
                dropdownMenu2.classList.remove('show');
            }
        });
    }
    const dropdownMenu3 = dropdown.querySelector('.dropdown-menu3');
    if (dropdownMenu3) {
        dropdownMenu3.addEventListener('transitionend', function() {
            // Удаляем класс show только после полного скрытия dropdown-menu3
            if (dropdownMenu3.style.display === 'none') {
                dropdownMenu3.classList.remove('show');
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('form2search');
    var placeholder = input.getAttribute('placeholder');
  
    input.addEventListener('focus', function() {
      this.removeAttribute('placeholder');
    });
  
    input.addEventListener('blur', function() {
      this.setAttribute('placeholder', placeholder);
    });
  });














  