const blockClassName = "tabs";
const tabClassName = "tab";
const activeTabClassName = "tab_active";
const contentClassName = "tab__content";
const activeContentClassName = "tab__content_active";

const blocks = Array.from(document.querySelectorAll(`.${blockClassName}`));

function changeTab(tab, tabs, block) {
  if(!tab.classList.contains(activeTabClassName)) {
    const tabIndex = tabs.indexOf(tab);
    const tabContents = Array.from(block.querySelectorAll(`.${contentClassName}`));

    for(let i=0; i<tabs.length; i++) {
      tabs[i].classList.remove(activeTabClassName);
      tabContents[i].classList.remove(activeContentClassName);
    }

    tab.classList.add(activeTabClassName);
    tabContents[tabIndex].classList.add(activeContentClassName);
  }
}

blocks.forEach(function(block) {
  const tabs = Array.from(block.querySelectorAll(`.${tabClassName}`));

  tabs.forEach(function(tab) {
    tab.onclick = () => changeTab(tab, tabs, block);
  });
});