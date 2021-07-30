const dropdownClassName = "dropdown";
const valueClassName = "dropdown__value";
const originalListClassName = "dropdown__list";
const activeListClassName = originalListClassName + " dropdown__list_active";
const listItemClassName = "dropdown__link";

const dropdownObjects = Array.from(document.querySelectorAll(`.${dropdownClassName}`));

function dropdownClick(dropdownListObject) {
  if(dropdownListObject.className === activeListClassName) {
    dropdownListObject.className = originalListClassName;
  } else {
    dropdownListObject.className = activeListClassName;
  }
}

function listItemClick(event, dropdownValueObject, dropdownListObject) {
  dropdownValueObject.textContent = event.target.textContent;
  dropdownListObject.className = originalListClassName;
  return false;
}

dropdownObjects.forEach(function(dropdown) {
  const dropdownValueObject = dropdown.querySelector(`.${valueClassName}`);
  const dropdownListObject = dropdown.querySelector(`.${originalListClassName}`);
  dropdownValueObject.onclick = () => dropdownClick(dropdownListObject);

  const dropdownItems = Array.from(dropdownListObject.querySelectorAll(`.${listItemClassName}`));
  dropdownItems.forEach(function(listItem) {
    listItem.onclick = (event) => listItemClick(event, dropdownValueObject, dropdownListObject);
  });
});