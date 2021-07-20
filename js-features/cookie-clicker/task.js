const counterId = "clicker__counter";
const imageId = "cookie";
let counterElement = document.getElementById(counterId);
let counter = Number(counterElement.textContent);
const imageElement = document.getElementById(imageId);
const scaleFactor = 1.2;

function changeSizes() {
  counter++;
  counterElement.textContent = counter;

  if(counter %2 === 0) {
    imageElement.width *= scaleFactor;
    imageElement.height *= scaleFactor;
  } else {
    imageElement.width /= scaleFactor;
    imageElement.height /= scaleFactor;
  }
}

imageElement.onclick = changeSizes;