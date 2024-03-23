
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