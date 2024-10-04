import "./style.css";
import { addElements } from "./addElements";
import { intialiseEventHandlers } from "./buttonEventHandler";
import { displayStoredProjects } from "./displayProjects";

document.addEventListener("DOMContentLoaded", () => {
    addElements()
    intialiseEventHandlers()
    displayStoredProjects()

})