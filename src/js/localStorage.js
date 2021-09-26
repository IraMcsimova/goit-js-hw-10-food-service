import { Theme } from "./themes";
import { refs } from "./refs";

const { LIGHT, DARK } = Theme;
const { switchToggler, body } = refs;

if (!localStorage.theme) localStorage.theme = [LIGHT];
body.className = localStorage.theme;

if (body.classList.contains([DARK])) switchToggler.checked = true;

switchToggler.addEventListener("change", () => {
  body.classList.toggle([DARK]);
  localStorage.theme = body.className || [LIGHT];

  if (body.classList.contains([DARK])) switchToggler.checked = true;
});
