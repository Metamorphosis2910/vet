
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

/* *********** */
/* Скрипт загрузки фото 1 */      
/* *********** */  

demoTextBox.addEventListener('keydown', () => {
	demoTextBox.value = demoTextBox.value.replace(/\D/g, '')
})

demoTextBox.addEventListener('keyup', () => {
	demoTextBox.value = demoTextBox.value.replace(/\D/g, '')
})