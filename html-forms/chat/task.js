const sideWidgetClass = "chat-widget__side-text";
const chatContainerClass = "chat-widget__messages-container";
const chatWidgetClass = "chat-widget";
const chatWidgetActiveClass = "chat-widget_active";
const chatInputClass = "chat-widget__input";
const chatMessagesClass = "chat-widget__messages";
const commonMessageClass = "message";
const clientMessageClass = commonMessageClass + " message_client";
const botGreeting = "Доброго дня! Чем могу помочь?";
const botMessages = [
  "Дайте подумать...",
  "Почему вы так считаете?",
  "Пока не знаю, но постараюсь разобраться...",
  "Вы зрите в корень!"
];

const sideWidget = document.querySelector(`.${sideWidgetClass}`);
const chatWidget = document.querySelector(`.${chatWidgetClass}`);
const chatInput = chatWidget.querySelector(`.${chatInputClass}`);
let chatMessages = chatWidget.querySelector(`.${chatMessagesClass}`);
const chatContainer = chatWidget.querySelector(`.${chatContainerClass}`);

function formattedTime(dateTime) {
  const dateObj = new Date(dateTime);
  let minutes = dateObj.getMinutes();
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  let hours = dateObj.getHours();
  if(hours < 10) {
    hours = "0" + hours;
  }
  return  hours + ":" + minutes;
}

function addMessage(newMessage, messageClasses) {
  chatMessages.innerHTML += `
    <div class="${messageClasses}">
      <div class="message__time">${formattedTime(Date())}</div>
      <div class="message__text">${newMessage}</div>
    </div>
  `;
}

function addBotMessage(newMessage) {
  addMessage(newMessage, commonMessageClass);
}

function addClientMessage(newMessage) {
  addMessage(newMessage, clientMessageClass);
}

function randomBotMessage() {
  const i = Math.floor(Math.random() * botMessages.length);
  return botMessages[i];
}

function clearInput(input) {
  input.value = "";
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight;
}

function checkInput(event) {
  if(event.key === "Enter" && chatInput.value !== "") {
    addClientMessage(chatInput.value);
    clearInput(chatInput);
    addBotMessage(randomBotMessage());
    scrollToBottom(chatContainer);
  }
}

sideWidget.addEventListener("click", () => {
  chatWidget.classList.add(chatWidgetActiveClass);
  addBotMessage(botGreeting);
});

chatInput.addEventListener("keyup", checkInput);