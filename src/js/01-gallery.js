import { galleryItems } from "./gallery-items.js";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", createImageCarts(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    closeText: "x",
    showCounter: false,
});

gallery.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }
});

function createImageCarts(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`;
        })
        .join("");
}
