const editorId = "editor";
const clearEditorClass = "clear_editor";
const editorTextKey = "editorText";
const editorElement = document.querySelector(`#${editorId}`);
const clearEditorElement = document.querySelector(`.${clearEditorClass}`);

function domLoadedHandler() {
  editorElement.value = localStorage.getItem(editorTextKey);
}

function changeEditorHandler() {
  localStorage.editorText = editorElement.value;
}

function clearEditorHandler(event) {
  editorElement.value = "";
  localStorage.removeItem(editorTextKey);
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", domLoadedHandler);
editorElement.addEventListener("input", changeEditorHandler);
clearEditorElement.addEventListener("click", (event) => clearEditorHandler(event));