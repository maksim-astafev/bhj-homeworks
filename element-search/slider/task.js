const activeSlideClass = " slider__item_active";
let originalSlideClass = "";
const sliderItems = document.querySelectorAll(".slider__item");
const slidesQuantity = sliderItems.length;
let activeSlideIndex = 0;
let newSlideIndex = undefined;
const classList = sliderItems.item(activeSlideIndex).classList;

function swapSlide() {
  originalSlideClass = sliderItems.item(newSlideIndex).className;
  sliderItems.item(activeSlideIndex).className = originalSlideClass;
  sliderItems.item(newSlideIndex).className += activeSlideClass;
  activeSlideIndex = newSlideIndex;
}

function nextSlide() {
  if(activeSlideIndex < slidesQuantity-1) {
    newSlideIndex = activeSlideIndex + 1;
  } else {
    newSlideIndex = 0;
  }
  swapSlide();
}

function prevSlide() {
  if(activeSlideIndex > 0) {
    newSlideIndex = activeSlideIndex - 1;
  } else {
    newSlideIndex = slidesQuantity-1;
  }
  swapSlide();
}

document.querySelector(".slider__arrow_next").onclick = nextSlide;
document.querySelector(".slider__arrow_prev").onclick = prevSlide;