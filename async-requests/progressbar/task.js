const fileFormId = "form";
const progressBarId = "progress";
const fileFormBlock = document.querySelector(`#${fileFormId}`);

function resetProgressBar() {
  const progressBarElement = document.querySelector(`#${progressBarId}`);
  progressBarElement.value = 0.0;
  return progressBarElement;
}

function progressHandler(event, progressBarElement) {
  progressBarElement.value = event.loaded / event.total;
}

function sendHandler(event) {
  const progressBarElement = resetProgressBar();
  const fileForm = new FormData(fileFormBlock);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.onprogress = (event) => progressHandler(event, progressBarElement);
  xhr.send(fileForm);

  event.preventDefault();
}

fileFormBlock.addEventListener("submit", (event) => sendHandler(event));