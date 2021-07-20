const holeName = "hole";
const moleClass = "hole_has-mole";
const deadId = "dead";
const lostId = "lost";
let deadElement = document.getElementById(deadId);
let lostElement = document.getElementById(lostId);
const deadThreshold = 10;
const lostThreshold = 5;
let deadCnt = 0;
let lostCnt = 0;

function getHole( index ) {
  return document.getElementById(`${holeName}${index}`);
}

function checkMole() {
  if(this.classList.contains(moleClass)) {
    deadCnt++;
    deadElement.textContent = deadCnt;
    if(deadCnt === deadThreshold) {
      alert("Победа!");
      deadCnt = 0;
      lostCnt = 0;
      location.reload();
    }
  } else {
    lostCnt++;
    lostElement.textContent = lostCnt;
    if(lostCnt === lostThreshold) {
      alert("Вы проиграли!");
      deadCnt = 0;
      lostCnt = 0;
      location.reload();
    }
  }
}

for(let i=1; i<10; i++) {
  let hole = getHole(i);
  hole.onclick = checkMole;
}