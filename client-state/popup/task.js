const modalClass = "modal";
const modalActiveClass = "modal_active";
const modalCloseClass = "modal__close";
const modalShowedKey = "modalShowed";
const modalShowedTag = "true";
const modalElement = document.querySelector(`.${modalClass}`);
const modalCloseElement = modalElement.querySelector(`.${modalCloseClass}`);

function setCookie(key, value) {
  document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + "; secure; samesite=lax";
}

function getCookie(key) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + key + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}

function showModal() {
  modalElement.classList.add(modalActiveClass);
}

function hideModal() {
  modalElement.classList.remove(modalActiveClass);
}

function pageLoadHandler() {
  const isModalShowedKey = getCookie(modalShowedKey);
  if(isModalShowedKey !== modalShowedTag) {
    showModal();
  }
}

function modalCloseHandler() {
  hideModal();
  setCookie(modalShowedKey, modalShowedTag);
}

window.addEventListener("load", pageLoadHandler);
modalCloseElement.addEventListener("click", modalCloseHandler);

