const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");

const carouselDom = document.querySelector(".carousel");
const listItemDom = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.addEventListener("click", () => {
  showSlider("next");
});

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
  }, timeRunning);
}
