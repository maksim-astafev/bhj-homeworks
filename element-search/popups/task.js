function activateModal(modalObject, originalClassName) {
  modalObject.className = originalClassName, modalActive;
}

function closeModal(modalObject, originalClassName) {
  modalObject.className = originalClassName, modalClosed;
}

const modalActive = "modal_active";
const modalClosed = "modal__close";
const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");

const originalMainClass = modalMain.className;
const originalSuccessClass = modalSuccess.className;

const successButton = modalMain.querySelector(".show-success");
const mainCloseButton = modalMain.querySelector(".modal__close");
const successCloseButton = modalSuccess.querySelector(".modal__close");

activateModal(modalMain, originalMainClass);
mainCloseButton.onclick = () => closeModal(modalMain, originalMainClass);
successCloseButton.onclick = () => closeModal(modalSuccess, originalSuccessClass);
successButton.onclick = function() {
  closeModal(modalMain, originalMainClass);
  activateModal(modalSuccess, originalSuccessClass);
}