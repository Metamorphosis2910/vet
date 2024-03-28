
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

function handleImageUpload(index) {
  var image = document.getElementById("upload" + index).files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var displayImage = document.getElementById("display-image" + index);
    displayImage.src = e.target.result;
    displayImage.style.marginBottom = "0";

    // Добавляем класс "loaded" после загрузки изображения
    displayImage.classList.add("loaded");

    // Show the close icon if image is loaded
    if (image) {
      document.getElementById("close-icon" + index).style.display = "inline";
    } else {
      document.getElementById("close-icon" + index).style.display = "none";
    }

    // Hide the label "Главное фото" or "Фото"
    var label = document.querySelector("#photo_cont-main p");
    if (index !== 1) {
      var labelIndex = index - 1;
      label = document.querySelectorAll(".photo_cont-upper p")[labelIndex];
    }
    label.style.display = "none";

    // Remove content property to display the uploaded image for the current image container
    displayImage.style.content = "none";
    // Add appropriate class to the image container to ensure correct icon display
    var imageContainer = document.getElementById("display-image" + index).parentElement;
    if (window.innerWidth >= 320 && window.innerWidth <= 768) {
      imageContainer.classList.add("img-mini-icon");
      imageContainer.classList.remove("img-vector");
    } else {
      imageContainer.classList.add("img-vector");
      imageContainer.classList.remove("img-mini-icon");
    }

    // Add event listeners for hover effect and delete icon
    displayImage.addEventListener("mouseover", function() {
      displayImage.style.filter = "blur(5px)";
      if (image) {
        document.getElementById("close-icon" + index).style.display = "inline";
      }
    });
    displayImage.addEventListener("mouseout", function() {
      displayImage.style.filter = "none";
      if (image) {
        document.getElementById("close-icon" + index).style.display = "none";
      }
    });
  }

  reader.readAsDataURL(image);
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  displayImage.src = "img/Vector.png";
  displayImage.style.marginBottom = "20px";

  // Set the icon back to mini_icon.png if there is no uploaded image, but only in mobile view
  var image = document.getElementById("upload" + index).files[0];
  if (!image && window.innerWidth >= 320 && window.innerWidth <= 768) {
    displayImage.parentElement.classList.remove("img-vector");
    displayImage.parentElement.classList.add("img-mini-icon");
  }

  // Hide the close icon
  document.getElementById("close-icon" + index).style.display = "none";

  // Clear the file input field
  document.getElementById("upload" + index).value = "";

  // Show the label "Главное фото" or "Фото"
  var label = document.querySelector("#photo_cont-main p");
  if (index !== 1) {
    var labelIndex = index - 1;
    label = document.querySelectorAll(".photo_cont-upper p")[labelIndex];
  }
  label.style.display = "block";
}

function showCloseIcon(index) {
  var image = document.getElementById("upload" + index).files[0];
  if (image) {
    document.getElementById("close-icon" + index).style.display = "inline";
  }
}

function hideCloseIcon(index) {
  document.getElementById("close-icon" + index).style.display = "none";
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  displayImage.src = "img/mini_icon.png"; // Устанавливаем src на mini_icon.png

  // Hide the close icon
  document.getElementById("close-icon" + index).style.display = "none";

  // Clear the file input field
  document.getElementById("upload" + index).value = "";

  // Show the label "Главное фото" or "Фото"
  var label = document.querySelector("#photo_cont-main p");
  if (index !== 1) {
    var labelIndex = index - 1;
    label = document.querySelectorAll(".photo_cont-upper p")[labelIndex];
  }
  label.style.display = "block";
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  displayImage.src = "img/mini_icon.png"; // Устанавливаем src на mini_icon.png

  // Удаляем класс loaded
  displayImage.classList.remove("loaded");

  // Hide the close icon
  document.getElementById("close-icon" + index).style.display = "none";

  // Clear the file input field
  document.getElementById("upload" + index).value = "";

  // Show the label "Главное фото" or "Фото"
  var label = document.querySelector("#photo_cont-main p");
  if (index !== 1) {
    var labelIndex = index - 1;
    label = document.querySelectorAll(".photo_cont-upper p")[labelIndex];
  }
  label.style.display = "block";
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  
  // Устанавливаем src на mini_icon.png для мобильных устройств
  if (window.innerWidth >= 320 && window.innerWidth <= 768) {
    displayImage.src = "img/mini_icon.png"; 
  } else {
    displayImage.src = "img/Vector.png"; // Устанавливаем src на Vector.png для десктопов
  }

  // Удаляем класс loaded
  displayImage.classList.remove("loaded");

  // Hide the close icon
  document.getElementById("close-icon" + index).style.display = "none";

  // Clear the file input field
  document.getElementById("upload" + index).value = "";

  // Show the label "Главное фото" or "Фото"
  var label = document.querySelector("#photo_cont-main p");
  if (index !== 1) {
    var labelIndex = index - 1;
    label = document.querySelectorAll(".photo_cont-upper p")[labelIndex];
  }
  label.style.display = "block";
}


/* *********** */
/* Скрипт загрузки фото 1 */      
/* *********** */ 

document.getElementById('nav-toggle').addEventListener('change', function() {
  if (this.checked) {
      // Бургер-меню открыто, отключаем скролл
      document.body.style.overflow = 'hidden';
  } else {
      // Бургер-меню закрыто, включаем скролл
      document.body.style.overflow = '';
  }
});