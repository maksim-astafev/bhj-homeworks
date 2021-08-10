const formId = "form";
const progressBarId = "progress";
const fileInputId = "file";
const sendButtonId = "send";
const sendButton = document.querySelector(`#${sendButtonId}`);

function resetProgressBar() {
  const progressBarElement = document.querySelector(`#${progressBarId}`);
  progressBarElement.value = 0.0;
  return progressBarElement;
}

function progressHandler(event, progressElement) {
  progressElement.value = event.loaded / event.total;
}

function sendHandler(event) {
  const fileInputElement = document.querySelector(`#${fileInputId}`);
  const selectedFile = fileInputElement.files[0];

  if(selectedFile !== undefined) {
    const progressBarElement = resetProgressBar();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = (event) => progressHandler(event, progressBarElement);
    xhr.send(selectedFile);
  }

  event.preventDefault();
}

sendButton.onclick = (event) => sendHandler(event);