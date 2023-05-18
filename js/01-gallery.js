import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.map((item) => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>` ).join('');
galleryContainer.insertAdjacentHTML('beforeend', markup);
galleryContainer.addEventListener('click', onClick);

function onClick(event){
    event.preventDefault()
    if(event.target.nodeName !== "IMG"){
        return;
    }
 
const instance = basicLightbox.create(`<div class ="modal">
<img src ="${event.target.dataset.source}" width ="800" height ="600" </div>
    `);
instance.show();


galleryContainer.addEventListener("keydown", onClickEscape);

function removeEventListenerEsc() {
    galleryContainer.removeEventListener("keydown", onClickEscape);
}
function onClickEscape(event) {
    if(event.code === "Escape") {
        instance.close();
        removeEventListenerEsc();
        console.log("натиснули Escape")
    }
 }

}
console.log(galleryItems);
// galleryContainer.addEventListener("keydown", (event) => {
//     if(event.code === "Escape") {
//         instance.close();
    
//         console.log("натиснули Escape")
//     }
// })

// }