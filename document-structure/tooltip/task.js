const hasTooltipClass = "has-tooltip";
const tooltipClass = "tooltip";
const tooltipActiveClass = "tooltip_active";

const hasTooltip = Array.from(document.querySelectorAll(`.${hasTooltipClass}`));
const tooltip = document.querySelector(`.${tooltipClass}`);
let lastClickedLink = null;
tooltip.classList.remove(tooltipActiveClass);

function setPosition(element, left, top) {
  const px = "px";
  element.style.left = left + px;
  element.style.top = top + px;
}

function activateTooltip(clickedLink) {
  tooltip.innerText = clickedLink.title;
  
  const left = clickedLink.offsetLeft;
  const top = clickedLink.offsetTop + clickedLink.offsetHeight;
  setPosition(tooltip, left, top);

  tooltip.classList.add(tooltipActiveClass);
}

function deactivateTooltip() {
  tooltip.classList.remove(tooltipActiveClass);  
}

function isTooltipActive() {
  return tooltip.classList.contains(tooltipActiveClass);
}

function tooltipHandler(event) {
  const clickedLink = event.target;

  if(!isTooltipActive()) {
    activateTooltip(clickedLink);
  } else {
    if(clickedLink === lastClickedLink) {
      deactivateTooltip();
    } else {
      activateTooltip(clickedLink);
      lastClickedLink = clickedLink;
    }
  }

  return false;
}

hasTooltip.forEach( tooltipLink => {
  tooltipLink.onclick = (event) => tooltipHandler(event);
});