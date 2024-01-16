document.addEventListener('click', function (event) {
  const burgerMenu = document.getElementById('navbarToggleExternalContent');
  const burgerButton = document.querySelector('.navbar-toggler');

  // Если клик был вне бургер-меню и кнопки, то закрываем меню
  if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
    const isMenuOpen = burgerMenu.classList.contains('show');
    
    if (isMenuOpen) {
      // Используем jQuery для закрытия бургер-меню
      $(burgerButton).click();
    }
  }
});



document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
  const files = event.target.files;

  for (const file of files) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        addPhotoElement(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  // Clear the input value to allow selecting the same file again
  event.target.value = '';
}

function addPhotoElement(imageDataUrl) {
  const gallery = document.getElementById('gallery');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo');

  const img = document.createElement('img');
  img.src = imageDataUrl;

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '×';
  deleteButton.addEventListener('click', function () {
    gallery.removeChild(photoContainer);
  });

  photoContainer.appendChild(img);
  photoContainer.appendChild(deleteButton);

  gallery.appendChild(photoContainer);
}

$(window).on('load', function() {
  var mainHeight = $('main').height();
  $('main').css('min-height', mainHeight + 'px');
});

let photoCount = 0;

function addPhotoElement(imageDataUrl) {
  if (photoCount >= 3) {
    // Limit the number of uploaded photos to 3
    alert('Вы можете загрузить не более 3 фотографий.');
    return;
  }

  const gallery = document.getElementById('gallery');

  const photoContainer = document.createElement('div');
  photoContainer.classList.add('photo');

  const img = document.createElement('img');
  img.src = imageDataUrl;


  const deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '×';
  deleteButton.addEventListener('click', function () {
    gallery.removeChild(photoContainer);
    photoCount--;
  });

  photoContainer.appendChild(img);
  photoContainer.appendChild(deleteButton);

  gallery.appendChild(photoContainer);

  photoCount++;
}


document.addEventListener("contextmenu", function (e){
  e.preventDefault();
}, false);

document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}