const rotatorClass = "rotator";
const rotatorCaseClass = "rotator__case";
const rotatorActiveClass = "rotator__case_active";
const adsInterval = 1000;

const rotators = Array.from(document.querySelectorAll(`.${rotatorClass}`));

rotators.forEach((rotator) => {
  const rotatorCases = Array.from(rotator.querySelectorAll(`.${rotatorCaseClass}`));
  const casesAmount = rotatorCases.length;
  let casesCounter = 0;

  // для независимости от ошибочной начальной расстановки классов
  rotatorCases.forEach((rotatorCase) => {
    rotatorCase.classList.remove(rotatorActiveClass);
  });
  rotatorCases[casesCounter].classList.add(rotatorActiveClass);

  setInterval(() => {
    rotatorCases[casesCounter].classList.remove(rotatorActiveClass);
    if(++casesCounter === casesAmount) {
      casesCounter = 0;
    }
    rotatorCases[casesCounter].classList.add(rotatorActiveClass);
    
  }, adsInterval);
});