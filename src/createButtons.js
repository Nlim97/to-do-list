import { showForm } from "./buttonEventHandler"

export const createAddProjectButton = () => {
    const addNewProjectDiv = document.createElement("div")
    const addNewProjectButton = document.createElement("button")
    const addProjectForm = document.querySelector(".project-form-container")

    addNewProjectDiv.classList.add("add-project")
    addNewProjectButton.classList.add("add-project-button")

    addNewProjectButton.addEventListener("click", () => {showForm(addProjectForm)})

    addNewProjectButton.innerHTML = "Add New Project"

    addNewProjectDiv.appendChild(addNewProjectButton)

    return addNewProjectDiv
};

export const createAddTaskButton = () => {
    const addNewTaskDiv = document.createElement("div")
    const addNewTaskButton = document.createElement("button")
    const addTaskForm = document.querySelector(".task-form-container")

    addNewTaskDiv.classList.add("add-task")
    addNewTaskButton.classList.add("add-task-button")

    addNewTaskButton.addEventListener("click", () => {showForm(addTaskForm)})

    addNewTaskButton.innerHTML = "Add New Task"

    addNewTaskDiv.appendChild(addNewTaskButton)

    addNewTaskDiv.style.display = "none"

    return addNewTaskDiv
}