
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
                         

