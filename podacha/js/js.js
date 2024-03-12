
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

      // Show the close icon
      document.getElementById("close-icon" + index).style.display = "inline";
  }

  reader.readAsDataURL(image);
}

function removeImage(index) {
  var displayImage = document.getElementById("display-image" + index);
  displayImage.src = "img/Vector.png";
  displayImage.style.marginBottom = "20px";

  // Hide the close icon
  document.getElementById("close-icon" + index).style.display = "none";

  // Clear the file input field
  document.getElementById("upload" + index).value = "";
}

function showCloseIcon(index) {
  var displayImage = document.getElementById("display-image" + index);
  if (displayImage.src && !displayImage.src.endsWith("Vector.png")) {
      document.getElementById("close-icon" + index).style.display = "inline";
  }
}

function hideCloseIcon(index) {
  document.getElementById("close-icon" + index).style.display = "none";
}

/* *********** */
/* Скрипт загрузки фото 1 */      
/* *********** */ 

