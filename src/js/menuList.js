import menuTemplate from "../template/menuTemplate.hbs";
import { menuItem } from "./refs";
import menu from "./menu.json";

function menuListCreating() {
  const menuListMarkup = menu.map((elem) => menuTemplate(elem)).join("");
  menuItem.innerHTML = menuListMarkup;
}
menuListCreating();
