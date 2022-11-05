const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
];

const containerImgEl = document.querySelector(".container-img");
const scrollNextEl = document.createElement("button");
const scrollPrevEl = document.createElement("button");
const imgEl = document.createElement("img");

imgEl.classList.add("width-img");

containerImgEl.append(imgEl);

let slide = document.querySelector("img");

let indexImage = 3;

slide.src = images[indexImage];

scrollNextEl.classList.add("scroll-next")
containerImgEl.append(scrollNextEl)

scrollPrevEl.classList.add("scroll-prev")
containerImgEl.append(scrollPrevEl)

scrollNextEl.addEventListener("click", function () {
    
    indexImage++;

    if (indexImage > images.length - 1) {
        indexImage = 0;
    }

    slide.src = images[indexImage];

});

scrollPrevEl.addEventListener("click", function () {
    
    indexImage--;

    if (indexImage < 0) {
        indexImage = images.length - 1;
    }

    slide.src = images[indexImage];

});