const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");

const carouselDom = document.querySelector(".carousel");
const listItemDom = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.addEventListener("click", () => {
  showSlider("next");
});

prevDom.addEventListener("click", () => {
  showSlider("prev");
});

let timeRunning = 3000;
let runTimeOut;
let timeAutoNext = 7000;
let timeAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(timeAutoRun);
  timeAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
