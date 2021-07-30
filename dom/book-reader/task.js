const fontSizeClass = "font-size";
const fontSizeActiveClass = "font-size_active";
const  fontSizeBigData = "big";
const  fontSizeNormalData = undefined;
const  fontSizeSmallData = "small";
const bookNormalClass = "book";
const bookBigClass = bookNormalClass + " book_fs-big";
const bookSmallClass = bookNormalClass + " book_fs-small";
let currentSizeButton = null;

const fontSizeButtons = Array.from(document.querySelectorAll(`.${fontSizeClass}`));
const bookElement = document.querySelector(`.${bookNormalClass}`);

function switchSizeButton(clickedButton) {
  currentSizeButton.classList.remove(fontSizeActiveClass);
  currentSizeButton = clickedButton;
  currentSizeButton.classList.add(fontSizeActiveClass);
}

function switchSizeInBook(currentSizeButton) {
  switch(currentSizeButton.dataset.size) {
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

function setDefaultButton(defaultFontSizeData) {
  if(currentSizeButton === null) {
    fontSizeButtons.forEach((toActivate) => {
      if(toActivate.dataset.size === defaultFontSizeData) {
        toActivate.classList.add(fontSizeActiveClass);
        currentSizeButton = toActivate;
        switchSizeInBook(currentSizeButton);
      }
    });
  }
}

fontSizeButtons.forEach((sizeButton) => {
  // защита, если класс задан нескольким кнопкам
  if(sizeButton.classList.contains(fontSizeActiveClass)) {
    if(currentSizeButton === null) {
      currentSizeButton = sizeButton;
      switchSizeInBook(currentSizeButton);
    } else {
      sizeButton.classList.remove(fontSizeActiveClass);
    }
  }

  sizeButton.onclick = (event) => {
    if(event.target !== currentSizeButton) {
      switchSizeButton(event.target);
      switchSizeInBook(currentSizeButton);
    }

    return false;
  }
});

// защита, если класс не задан ни одной кнопке
setDefaultButton(fontSizeNormalData);