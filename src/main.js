import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import "@/shared/utilities/modal";
import "@/shared/layout/header/header";
import "@/pages/home/newsLetter";

document.body.classList.add("no-transition");
window.addEventListener("load", () => {
  document.body.classList.remove("no-transition");
});
