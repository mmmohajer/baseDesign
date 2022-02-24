import styles from "./Header.module.scss";

export const menuToggleHandler = (
  mobMenuContainer,
  setHamburgerIconToggler,
  menuIsOpen,
  setMenuIsOpen
) => {
  if (mobMenuContainer) {
    mobMenuContainer.classList.toggle(styles.menu_mob_hr_active);
    setMenuIsOpen(!menuIsOpen);
    if (!menuIsOpen) {
      const newDiv = document.createElement("DIV");
      newDiv.onclick = () => {
        newDiv.parentNode.removeChild(newDiv);
        setHamburgerIconToggler(true);
      };
      newDiv.classList.add(styles.fullWindow);
      const body = document.querySelector("body");
      body.appendChild(newDiv);
    }
  }
};

export const toggleSubMenuHandler = (submenus, item) => {
  console.log(submenus.current);
  for (let key in submenus.current) {
    submenus.current[key].classList.add("no-display");
  }

  const subMenu = submenus.current[item];
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

export const toggleMobileSubMenuHandler = (mobileSubMenu) => {
  mobileSubMenu.classList.toggle("flex");
  mobileSubMenu.classList.toggle("no-display");
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

export const mobileSubMenuClickHandler = (mobMenuContainer) => {
  const div = mobMenuContainer?.current;
  div.classList.remove(styles.menu_mob_hr_active);
};

export const slugifyConfig = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: true,
  locale: "vi",
  trim: true,
};
