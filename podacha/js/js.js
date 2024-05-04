
/* *********** */
/* Скрипт запрета на использование опрределенных клавиш */
/* *********** */


// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
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

/* *********** */
/* Окончание скрипта */
/* *********** */

/* *********** */
/* Начало скрипта textarea */
/* *********** */
function toggleAfter(element) {
  element.parentNode.classList.toggle('active', element === document.activeElement);
}

function limitTextarea(element, maxLength) {
  var textWithoutSpaces = element.value.replace(/\s/g, '');

  if (textWithoutSpaces.length > maxLength) {
      var truncatedText = textWithoutSpaces.substring(0, maxLength);
      element.value = element.value.replace(/\S/g, function (match, offset) {
          return offset < truncatedText.length ? match : '';
      });
  }
}

function blockEnterKey(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var textareas = document.querySelectorAll('.advice_info-desc textarea');
  textareas.forEach(function (textarea) {
      textarea.addEventListener('input', function () {
          limitTextarea(this, 420);
      });
      textarea.addEventListener('keydown', blockEnterKey);
  });

  var inputWrapper2Textarea = document.querySelector('.inputwrapper2 textarea');
  inputWrapper2Textarea.addEventListener('input', function () {
      limitTextarea(this, 20);
  });

  var gorodTextarea = document.querySelector('.gorod');
  gorodTextarea.addEventListener('input', function () {
      limitTextarea(this, 30);
  });
});

/* *********** */
/* Окончание скрипта textarea */
/* *********** */    
             
/* *********** */
/* Скрипт загрузки фото 1 */      
/* *********** */   

// function handleImageUpload(index) {
//   var image = document.getElementById("upload" + index).files[0];
//   var reader = new FileReader();

//   reader.onload = function (e) {
//     var displayImage = document.getElementById("display-image" + index);
//     displayImage.src = e.target.result;
//     displayImage.style.marginBottom = "0";
//     displayImage.classList.add("loaded");

//     if (image) {
//       document.getElementById("close-icon" + index).style.display = "inline";
//     } else {
//       document.getElementById("close-icon" + index).style.display = "none";
//     }

//     var label = document.querySelector("#main_photo");
//     if (index !== 1) {
//       label = document.querySelectorAll(".photo_cont-upper-trio p")[index - 2];
//     }
//     label.style.display = "none";

//     displayImage.style.content = "none";
//     if (!image) return;

//     if (displayImage.src.indexOf('mini_icon.png') === -1 && displayImage.src.indexOf('Vector.png') === -1) {
//       displayImage.classList.add("blur");
//     }
//   };

//   reader.readAsDataURL(image);

//   var closeIcon = document.getElementById("close-icon" + index);
//   closeIcon.addEventListener("mouseover", function() {
//     var container = document.getElementById("display-image" + index).parentElement;
//     container.classList.add("blur");
//   });

//   closeIcon.addEventListener("mouseout", function() {
//     var container = document.getElementById("display-image" + index).parentElement;
//     container.classList.remove("blur");
//   });
// }

// function removeImage(index) {
//   var displayImage = document.getElementById("display-image" + index);
//   displayImage.src = "img/Vector.png";
//   displayImage.style.marginBottom = "20px";
//   displayImage.classList.remove("loaded", "blur");

//   document.getElementById("close-icon" + index).style.display = "none";
//   document.getElementById("upload" + index).value = "";

//   var label = document.querySelector("#main_photo");
//   if (index !== 1) {
//     label = document.querySelectorAll(".photo_cont-upper-trio p")[index - 2];
//   }
//   label.style.display = "block";
// }

// function showCloseIcon(index) {
//   var image = document.getElementById("upload" + index).files[0];
//   if (image) {
//     document.getElementById("close-icon" + index).style.display = "inline";
//     document.getElementById("display-image" + index).classList.add("blur");
//   }
// }

// function hideCloseIcon(index) {
//   document.getElementById("close-icon" + index).style.display = "none";
//   document.getElementById("display-image" + index).classList.remove("blur");
// }


// function handleImageUpload(index) {
//   var image = document.getElementById("upload" + index).files[0];
//   var reader = new FileReader();

//   reader.onload = function (e) {
//     var displayImage = document.getElementById("display-image" + index);
//     displayImage.src = e.target.result;
//     displayImage.style.marginBottom = "0";
//     displayImage.classList.add("loaded");

//     if (image) {
//       document.getElementById("close-icon" + index).style.display = "inline";
//     } else {
//       document.getElementById("close-icon" + index).style.display = "none";
//     }

//     var label = document.querySelector("#main_photo");
//     if (index !== 1) {
//       label = document.querySelectorAll(".photo_cont-upper-trio p")[index - 2];
//     }
//     label.style.display = "none";

//     displayImage.style.content = "none";
//   };

//   reader.readAsDataURL(image);

//   var closeIcon = document.getElementById("close-icon" + index);
//   closeIcon.addEventListener("mouseover", function() {
//     var container = document.getElementById("display-image" + index).parentElement;
//     container.classList.add("blur");
//   });

//   closeIcon.addEventListener("mouseout", function() {
//     var container = document.getElementById("display-image" + index).parentElement;
//     container.classList.remove("blur");
//   });
// }


// /* *********** */
// /* Скрипт загрузки фото 1 */      
// /* *********** */ 

// document.getElementById('nav-toggle').addEventListener('change', function() {
//   if (this.checked) {
//       // Бургер-меню открыто, отключаем скролл
//       document.body.style.overflow = 'hidden';
//   } else {
//       // Бургер-меню закрыто, включаем скролл
//       document.body.style.overflow = '';
//   }
// });

// window.onload = function() {
//   var screenWidth = window.innerWidth;
//   var vectorImg = document.getElementById("vectorImg");

//   // Проверяем, находится ли ширина экрана в диапазоне 768px-1024px
//   if (screenWidth >= 768 && screenWidth <= 1024) {
//       // Меняем источник изображения на изображение с названием "768px.png"
//       vectorImg.src = "768px.png";
//       vectorImg.alt = "768px Image"; // Опционально: изменяем альтернативный текст
//   }
// };

function handleImageUpload(index) {
  var image = document.getElementById("upload" + index).files[0];
  var reader = new FileReader();
  var displayImage = document.getElementById("display-image" + index);
  var closeIcon = document.getElementById("close-icon" + index);
  var label = document.querySelector("#main_photo");

  if (index !== 1) {
    label = document.querySelectorAll(".photo_cont-upper-trio p")[index - 2];
  }

  reader.onload = function (e) {
    displayImage.src = e.target.result;
    displayImage.style.marginBottom = "0";
    displayImage.classList.add("loaded");
    label.style.display = "none";

    if (image) {
      closeIcon.style.display = "inline";
      displayImage.parentElement.classList.add("blur");
      document.getElementById("upload" + index).disabled = true; // Деактивируем input
    } else {
      closeIcon.style.display = "none";
      displayImage.parentElement.classList.remove("blur");
      document.getElementById("upload" + index).disabled = false; // Активируем input
    }
  };

  reader.readAsDataURL(image);
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  var closeIcon = document.getElementById("close-icon" + index);
  var input = document.getElementById("upload" + index);
  var label = document.querySelector("#main_photo");

  if (index !== 1) {
    label = document.querySelectorAll(".photo_cont-upper-trio p")[index - 2];
  }

  displayImage.src = "img/Vector.png";
  displayImage.style.marginBottom = "20px";
  displayImage.classList.remove("loaded");
  closeIcon.style.display = "none";
  input.value = "";
  label.style.display = "block";
  displayImage.parentElement.classList.remove("blur");
  input.disabled = false; // Активируем input при удалении изображения
}

function showCloseIcon(index) {
  var image = document.getElementById("upload" + index).files[0];
  var closeIcon = document.getElementById("close-icon" + index);
  var displayImage = document.getElementById("display-image" + index);

  if (image) {
    closeIcon.style.display = "inline";
    displayImage.parentElement.classList.add("blur");
  }
}

function hideCloseIcon(index) {
  var closeIcon = document.getElementById("close-icon" + index);
  var displayImage = document.getElementById("display-image" + index);

  closeIcon.style.display = "none";
  displayImage.parentElement.classList.remove("blur");
}

document.addEventListener("DOMContentLoaded", function() {
  var icons = document.querySelectorAll(".close-icon");
  
  icons.forEach(function(icon) {
    icon.addEventListener("mouseover", function() {
      var container = this.parentElement.querySelector(".image-container");
      container.classList.add("blur");
    });

    icon.addEventListener("mouseout", function() {
      var container = this.parentElement.querySelector(".image-container");
      container.classList.remove("blur");
    });
  });

  var images = document.querySelectorAll(".image-container img");
  
  images.forEach(function(img) {
    img.addEventListener("click", function() {
      this.parentElement.classList.add("blur");
      var closeIcon = this.parentElement.querySelector(".close-icon");
      if (closeIcon) {
        closeIcon.style.display = "inline";
      }
    });
  });
});


