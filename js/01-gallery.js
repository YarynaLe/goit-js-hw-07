import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
const listItemImage = createListItemImage(galleryItems);
galleryRefs.innerHTML = listItemImage;

galleryRefs.addEventListener("click", onConteinerClickZoomImage);

function createListItemImage(elements) {
  return elements
    .map(
      (element) =>
        `<div class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" alt="${element.description}" data-source="${element.original}" 
        ></a></div>`
    )
    .join("");
}

function onConteinerClickZoomImage(element) {
  element.preventDefault();

  if (element.target.classList.contains("gallery")) {
    return;
  }

  const source = element.target.dataset.source;

  const instance = basicLightbox
    .create(`<img src="${source}" width="800" height="600">`)
    .show();
}
