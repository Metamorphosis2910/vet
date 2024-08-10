
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

function hidePlaceholder(inputId, placeholderId) {
  document.getElementById(inputId).setAttribute('placeholder', '');
  document.getElementById(placeholderId).style.display = 'none';
}

function showPlaceholder(inputId, placeholderId) {
  document.getElementById(inputId).setAttribute('placeholder', document.getElementById(placeholderId).textContent);
  document.getElementById(placeholderId).style.display = 'block';
}

function checkInput(inputId, imageId) {
  var inputValue = document.getElementById(inputId).value;
  var image = document.getElementById(imageId);

  if (inputValue.trim() !== '') {
    image.style.display = 'none';
  } else {
    image.style.display = 'block';
  }
}

  function checkInput(inputId, imageId) {
    var input = document.getElementById(inputId);
    var image = document.getElementById(imageId);
    
    // Если инпут активен (в фокусе) или содержит текст, скрываем изображение
    if (input.value.trim() !== '' || input === document.activeElement) {
      image.style.display = 'none';
    } else {
      image.style.display = 'inline-block';
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    // Скрытие изображений при загрузке страницы, если в инпутах есть текст
    checkInput('loginInput', 'loginImage');
    checkInput('passwordInput', 'passwordImage');
  });


