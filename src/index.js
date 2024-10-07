import "./style.css";
import { addElements } from "./addElements";
import { intialiseEventHandlers } from "./buttonEventHandler";
import { displayStoredProjects } from "./displayProjectsAndTasks";

document.addEventListener("DOMContentLoaded", () => {
    addElements()
    intialiseEventHandlers()
    displayStoredProjects()
})