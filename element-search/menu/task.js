const menuLinks = document.querySelectorAll(".menu__link");
const menuActiveClass = " menu_active";
let originalMenuClass = "";
let activeMenu = null;

for(let i=0; i<menuLinks.length; i++) {
  let menuItem = menuLinks.item(i).closest(".menu__item").querySelector(".menu_sub");
  if(menuItem !== null) {
    menuLinks.item(i).onclick = function () {
      if(activeMenu !== null) {
        activeMenu.className = originalMenuClass;
      }
      originalMenuClass = menuItem.className;
      menuItem.className += menuActiveClass;
      activeMenu = menuItem;
      return false;
    }
  }
}