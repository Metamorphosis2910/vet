
  
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

function checkInput(inputId, imageId) {
  var input = document.getElementById(inputId);
  var image = document.getElementById(imageId);

  if (input.value.trim() !== '' || input === document.activeElement) {
    image.style.display = 'none';
  } else {
    image.style.display = 'inline-block';
  }
}