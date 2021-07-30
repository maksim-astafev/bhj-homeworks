const fontSizeClass = "font-size";
const fontSizeActiveClass = "font-size_active";
const  fontSizeBigData = "big";
const  fontSizeSmallData = "small";
const bookNormalClass = "book";
const bookBigClass = bookNormalClass + " book_fs-big";
const bookSmallClass = bookNormalClass + " book_fs-small";
let currentSizeButton = null;

const fontSizeButtons = Array.from(document.querySelectorAll(`.${fontSizeClass}`));
const bookElement = document.querySelector(`.${bookNormalClass}`);

fontSizeButtons.forEach((sizeButton) => {
  if(sizeButton.classList.contains(fontSizeActiveClass)) {
    currentSizeButton = sizeButton;
  }

  sizeButton.onclick = (event) => {
    if(event.target !== currentSizeButton) {
      currentSizeButton.classList.remove(fontSizeActiveClass);
      currentSizeButton = event.target;
      currentSizeButton.classList.add(fontSizeActiveClass);

      switch(sizeButton.dataset.size) {
        case fontSizeSmallData:
          bookElement.className = bookSmallClass;
          break;
        case fontSizeBigData:
          bookElement.className = bookBigClass;
          break;
        default:
          bookElement.className = bookNormalClass;
          break
      }
    }

    return false;
  }
});

if(currentSizeButton === null) {
  fontSizeButtons.forEach((toActivate) => {
    if(toActivate.dataset.size === fontSizeBigData) {
      toActivate.classList.add(fontSizeActiveClass);
    }
  });
}