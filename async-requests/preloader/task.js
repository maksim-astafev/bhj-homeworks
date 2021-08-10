const loaderClass = "loader";
const loaderActiveClass = "loader_active";
const currencyListId = "items";

const xhr = new XMLHttpRequest();
const currencyListBlock = document.querySelector(`#${currencyListId}`);
const loaderElement = document.querySelector(`.${loaderClass}`);
deactivateLoaderAnimation();

function currencyHtmlTemplate(charCode, value) {
  const buyCurrency = "руб.";
  return `
  <div class="item">
    <div class="item__code">
        ${charCode}
      </div>
      <div class="item__value">
        ${value}
      </div>
      <div class="item__currency">
        ${buyCurrency}
      </div>
    </div>
    `;
}

function addCurrencyToList(currency) {
  const currencyHtml = currencyHtmlTemplate(currency.CharCode, currency.Value);
  currencyListBlock.insertAdjacentHTML("beforeend", currencyHtml);
}

function activateLoaderAnimation(){
  loaderElement.classList.add(loaderActiveClass);
}
function deactivateLoaderAnimation(){
  loaderElement.classList.remove(loaderActiveClass);
}

function serverListener() {
  if(this.readyState === this.DONE  && this.status == 200) {
    const currencyList = this.response.response.Valute;
    for(i in currencyList) {
      addCurrencyToList(currencyList[i]);
    }
    deactivateLoaderAnimation();
  }
}

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.responseType = "json";
xhr.addEventListener("readystatechange", serverListener);
xhr.send();
activateLoaderAnimation();