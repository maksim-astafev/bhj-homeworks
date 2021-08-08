// const interestsClass = "interests";
const interestClass = "interest";
const interestCheckClass = "interest__check";

const interestChecks = Array.from(document.querySelectorAll(`.${interestCheckClass}`));
const interests = Array.from(document.querySelectorAll(`.${interestClass}`));

function isHaveChild(element, selector) {
  const children = element.querySelectorAll(`.${selector}`);
  return children.length > 0;
}

function toggleCheckChildren(event, element, selector) {
  const parent = event.target;
  const children = Array.from(element.querySelectorAll(`.${selector}`));
  children.forEach((child) => {
    if(child !== parent) {
      child.checked = parent.checked;
    }
  });
}

interests.forEach( (interest) => {
  if(isHaveChild(interest, interestClass)) {
    const nearestCheck = interest.querySelector(`.${interestCheckClass}`)
    nearestCheck.addEventListener("change", (event) => toggleCheckChildren(event, interest, interestCheckClass));
  }
});