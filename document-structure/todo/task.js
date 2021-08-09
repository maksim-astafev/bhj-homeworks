const tasksClass = "tasks";
const inputClass = "tasks__input";
const addTaskClass = "tasks__add";
const tasksListClass = "tasks__list";
const taskClass = "task";
const taskRemoveClass = "task__remove";

function taskTemplate(taskTitle) {
  return `
    <div class="task">
      <div class="task__title">
        ${taskTitle}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `;
}

const tasksBlock = document.querySelector(`.${tasksClass}`);
const inputElement = tasksBlock.querySelector(`.${inputClass}`);
const addElement = tasksBlock.querySelector(`.${addTaskClass}`);
const tasksList = tasksBlock.querySelector(`.${tasksListClass}`);

function addTask(taskTitle) {
  const taskHtml = taskTemplate(taskTitle);
  tasksBlock.insertAdjacentHTML("beforeEnd", taskHtml);
}

function addTaskRemoveHandler() {
  const allTasks = Array.from(tasksBlock.querySelectorAll(`.${taskClass}`));
  const addedTask = allTasks[allTasks.length-1];
  const addedTaskRemove = addedTask.querySelector(`.${taskRemoveClass}`);
  addedTaskRemove.onclick = () => addedTask.remove();
}

function newTaskHandler(inputValue) {
  addTask(inputValue);
  addTaskRemoveHandler();
}

function clearInput(input) {
  input.value = "";
}

function checkInput(inputValue) {
  if(inputValue !== "") {
    newTaskHandler(inputElement.value);
    clearInput(inputElement);
  }
}

function inputHandler(event) {
  if(event.key === "Enter") {
    checkInput(inputElement.value);
  }
}

function addHandler() {
  checkInput(inputElement.value);
  return false;
}

inputElement.addEventListener("keyup", (event) => inputHandler(event));
addElement.onclick = () => addHandler();