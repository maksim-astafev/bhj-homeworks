const signinBlockClass = "signin";
const signinActiveClass = "signin_active";
const signinFormId = "signin__form";
const signinButtonId = "signin__btn";
const logoutButtonClass = "logout__btn";
const logoutActiveClass = "logout_active";
const welcomeClass = "welcome";
const welcomeActiveClass = "welcome_active";
const successKey = "success";
const userIdKey = "user_id";
const signinFailedMessage = "Неверный логин/пароль";

const signinBlock = document.querySelector(`.${signinBlockClass}`);
const signinFormBlock = signinBlock.querySelector(`#${signinFormId}`);
const signinButton = signinBlock.querySelector(`#${signinButtonId}`);
const welcomeBlock = document.querySelector(`.${welcomeClass}`);
const userIdElement = welcomeBlock.querySelector(`#${userIdKey}`);
const logoutButton = document.querySelector(`.${logoutButtonClass}`);

function domLoadedHandler() {
  lastUserId = localStorage[userIdKey];
  if(lastUserId !== undefined) {
    hideSignin();
    showWelcome(lastUserId);
    showLogout();
  }
}

function showSignin() {
  signinBlock.classList.add(signinActiveClass);
}

function hideSignin() {
  signinBlock.classList.remove(signinActiveClass);
}

function showWelcome(userId) {
  userIdElement.textContent = userId;
  welcomeBlock.classList.add(welcomeActiveClass);
}

function hideWelcome() {
  welcomeBlock.classList.remove(welcomeActiveClass);
}

function showLogout() {
  logoutButton.classList.add(logoutActiveClass);
}

function hideLogout() {
  logoutButton.classList.remove(logoutActiveClass);
}

function getJsonResponse(serverResponse) {
  try {
    return JSON.parse(serverResponse);
  } catch (error) {
    return null;
  }
}

function getUserId(serverResponse) {
  return serverResponse[userIdKey];
}

function signinSuccessHandler(userId) {
  if(userId !== undefined) {
    hideSignin();
    showWelcome(userId);
    showLogout();
    localStorage[userIdKey] = userId;
  }
}

function isSigninSuccessful(serverResponse) {
  serverResponse = getJsonResponse(serverResponse);
  if(serverResponse !== null) {
    const serverResponseValue = serverResponse[successKey];
    if(serverResponseValue === true) {
      const userId = getUserId(serverResponse);
      signinSuccessHandler(userId);
    } else {
      alert(signinFailedMessage);
    }
  }
}

function serverListener() {
  if(this.status == 200) {
    isSigninSuccessful(this.response);
  }
}

function signinHandler(event) {
  const signinForm = new FormData(signinFormBlock);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(signinForm);
  xhr.addEventListener("load",serverListener);
  
  event.preventDefault();
}

function logoutHandler(event) {
  console.log("logout__btn");

  localStorage.clear();
  hideWelcome();
  hideLogout();
  showSignin();
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", domLoadedHandler);
signinButton.addEventListener("click", (event) => signinHandler(event));
logoutButton.addEventListener("click", (event) => logoutHandler(event));