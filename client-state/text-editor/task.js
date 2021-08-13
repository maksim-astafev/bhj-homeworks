const editorId = "editor";
const clearEditorClass = "clear_editor";
const editorElement = document.querySelector(`#${editorId}`);
const clearEditorElement = document.querySelector(`.${clearEditorClass}`);

function domLoadedHandler() {
  const lastEditorText = localStorage.editorText;
  if(lastEditorText !== undefined) {
    editorElement.value = lastEditorText;
  }
}

function changeEditorHandler() {
  localStorage.editorText = editorElement.value;
}

function clearEditorHandler(event) {
  editorElement.value = "";
  localStorage.editorText = "";
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", domLoadedHandler);
editorElement.addEventListener("input", changeEditorHandler);
clearEditorElement.addEventListener("click", (event) => clearEditorHandler(event));