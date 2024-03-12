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

    document.querySelectorAll('.carousel-item img').forEach(img =>{
        img.onclick = () => {
            document.querySelector('.carousel-pop_up').style.display = 'block';
            document.querySelector('.carousel-pop_up img').src = img.getAttribute('src');
        }
    }); 

    document.querySelector('.carousel-pop_up span').onclick = () => {
        document.querySelector('.carousel-pop_up').style.display = 'none';
    }