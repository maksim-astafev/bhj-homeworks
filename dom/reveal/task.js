const revealClass = "reveal";
const revealActiveClass = "reveal_active";
const revealElements = Array.from(document.querySelectorAll(`.${revealClass}`));

const isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const { top, bottom } = element.getBoundingClientRect();
  return top < viewportHeight && bottom > 0;
}

document.onscroll = (event) => {
  revealElements.forEach(function(reveal) {
    if(isInViewport(reveal)) {
      reveal.classList.add(revealActiveClass);
    } else {
      reveal.classList.remove(revealActiveClass);
    }
  });
}