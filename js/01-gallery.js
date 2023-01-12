import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
function onGalleryContainerClick(e) {
  e.preventDefault();

  const isGalleryItemEl = e.target.classList.contains(".gallery-item");
  if (isGalleryItemEl) {
    return;
  }

  const isGalleryItemLink = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${isGalleryItemLink}">
`);

  instance.show();
}
