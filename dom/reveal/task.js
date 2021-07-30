const revealClass = "reveal";
const revealActiveClass = "reveal_active";
const revealElements = Array.from(document.querySelectorAll(`.${revealClass}`));

const isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (elementTop < viewportHeight && elementBottom > 0) ? true : false;
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