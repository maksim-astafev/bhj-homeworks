const pollClass = "poll";
const pollTitleClass = "poll__title";
const pollAnswersClass = "poll__answers";
const pollAnswerClass = "poll__answer";
const pollConfirmText = "Спасибо, ваш голос засчитан!";
const xhr = new XMLHttpRequest();

function pollConfirm() {
  confirm(pollConfirmText);
}

function setPollTitle(pollTitleElement, pollTitle) {
  pollTitleElement.innerText = pollTitle;
}

function createAnswerElement(pollAnswersBlock, answer) {
  let answerElement = document.createElement("button");
  answerElement.classList.add(pollAnswerClass);
  answerElement.textContent = answer;
  answerElement.onclick = pollConfirm;
  pollAnswersBlock.insertAdjacentElement("beforeend", answerElement);
}

function serverListener() {
  if(this.readyState === this.DONE  && this.status == 200) {
    const poll = this.response.data; 

    const pollBlock = document.querySelector(`.${pollClass}`);
    const pollTitleElement = pollBlock.querySelector(`.${pollTitleClass}`);
    setPollTitle(pollTitleElement, poll.title);

    const pollAnswersBlock = pollBlock.querySelector(`.${pollAnswersClass}`);
    poll.answers.forEach( answer => {
      createAnswerElement(pollAnswersBlock, answer);
    });
  }
}

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = "json";
xhr.addEventListener("readystatechange", serverListener);
xhr.send();