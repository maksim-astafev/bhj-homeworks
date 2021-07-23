const menuLinks = document.querySelectorAll(".menu__link");
const menuActiveClass = " menu_active";
let originalMenuClass = "";
let activeMenu = null;

function menuClick(clickItem) {
  // Нет открытого меню.    Открыть меню.
  if(activeMenu === null) {
    activeMenu = clickItem;
    activeMenu.className += menuActiveClass;
  } else {
    // Есть открытое меню, кликнуто по открытому меню.    Закрыть открытое меню.
    if(clickItem === activeMenu) {
      activeMenu.className = originalMenuClass;
      activeMenu = null;
    } else {
      // Есть открытое меню, кликнуто по закрытому меню.    Закрыть открытое меню. Открыть кликнутое меню.
      activeMenu.className = originalMenuClass;
      activeMenu = clickItem;
      activeMenu.className += menuActiveClass;
    }
  }
  return false;
}

for(let i=0; i<menuLinks.length; i++) {
  let menuItem = menuLinks.item(i).closest(".menu__item").querySelector(".menu_sub");
  if(menuItem !== null) {
    originalMenuClass = menuItem.className;
    menuLinks.item(i).onclick = () => menuClick(menuItem);
  }
}