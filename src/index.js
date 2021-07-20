import './sass/main.scss';
import { galleryItems } from './app.js';
import { galleryContainer, lightboxRef, overlayRef, closeOverlayButton, lightboxPhotoContainer } from './refs.js';


// Creating gallery markup:
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(galleryArray) {
    return galleryArray.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
};


// Open/close modal:
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryImage = event.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
    lightboxPhotoContainer.alt = event.target.alt;
    lightboxPhotoContainer.src = event.target.dataset.source;

    openModal();
}

overlayRef.addEventListener('click', closeModal);
closeOverlayButton.addEventListener('click', closeModal);

function closeModal () {
    lightboxRef.classList.toggle('is-open');
    //Cleaning alt and src:
    lightboxPhotoContainer.alt = '';
    lightboxPhotoContainer.src = '';
    window.removeEventListener('keydown', onEscKeydown);
}

function openModal() {
    window.addEventListener('keydown', onEscKeydown);
    lightboxRef.classList.toggle('is-open');
}

function onEscKeydown(event) {
    if (event.code === 'Escape') {
        closeModal()
    }
}
