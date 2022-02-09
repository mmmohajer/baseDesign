import styles from "./Header.module.scss";

export const menuToggleHandler = () => {
  const menuList = document.querySelector("#hamburger-menu-list");
  const menuIcon = document.querySelector("#hamburger-menu-icon");
  menuList.classList.toggle("hamburger-menu-hr-active");
  menuIcon.classList.toggle("hamburger-menu-icon");
  menuIcon.classList.toggle("hamburger-menu-closed-icon");
  const newDiv = document.createElement("DIV");
  newDiv.onclick = () => {
    menuList.classList.remove("hamburger-menu-hr-active");
    menuIcon.classList.add("hamburger-menu-icon");
    menuIcon.classList.remove("hamburger-menu-closed-icon");
    newDiv.parentNode.removeChild(newDiv);
  };
  newDiv.classList.add(styles.fullWindow);
  const body = document.querySelector("body");
  body.appendChild(newDiv);
};

export const toggleSubMenuHandler = (item) => {
  const allSubMenus = document.querySelectorAll(`.${styles.subMenuContainer}`);
  allSubMenus.forEach((menu) => {
    menu.classList.add("no-display");
  });

  const subMenu = document.querySelector(`#${item}SubMenu`);
  subMenu.classList.toggle("flex");
  subMenu.classList.toggle("no-display");

  const newDiv = document.createElement("DIV");
  newDiv.onclick = () => {
    subMenu.classList.add("no-display");
    newDiv.parentNode.removeChild(newDiv);
  };
  newDiv.classList.add(styles.fullWindow);
  const body = document.querySelector("body");
  body.appendChild(newDiv);
};

export const toggleMobileSubMenuHandler = (item) => {
  const subMenu = document.querySelector(`#${item}MobileSubMenu`);
  subMenu.classList.toggle("flex");
  subMenu.classList.toggle("no-display");
};

export const removeDivFullWindow = (e) => {
  const div = document.querySelector(`.${styles.fullWindow}`);
  if (div) {
    div.parentNode.removeChild(div);
  }
};

export const subMenuClickHandler = (item) => {
  const subMenu = document.querySelector(`#${item}SubMenu`);
  subMenu.classList.remove("flex");
  subMenu.classList.add("no-display");
};

export const slugifyConfig = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
  locale: "vi",
  trim: true,
};
