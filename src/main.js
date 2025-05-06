import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { renderHtml } from "./shared/utilities/helperFunctions";
renderHtml("header", "header", "/src/shared/layout/header");
renderHtml("footer", "footer", "/src/shared/layout/footer");

// renderHtml("main", "home", "/src/pages/home");
