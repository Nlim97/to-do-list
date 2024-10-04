import { showAddProjectForm } from "./buttonEventHandler"

export const createAddProjectButton = () => {
    const addNewProjectDiv = document.createElement("div")
    const addNewProjectButton = document.createElement("button")

    addNewProjectDiv.classList.add("add-project")
    addNewProjectButton.classList.add("add-project-button")

    addNewProjectButton.addEventListener("click", showAddProjectForm)

    addNewProjectButton.innerHTML = "Add New Project"

    addNewProjectDiv.appendChild(addNewProjectButton)

    return addNewProjectDiv
};

export const createAddTaskButton = () => {
    const addNewTaskDiv = document.createElement("div")
    const addNewTaskButton = document.createElement("button")

    addNewTaskDiv.classList.add("add-task")
    addNewTaskButton.classList.add("add-task-button")

    addNewTaskButton.innerHTML = "Add New Task"

    addNewTaskDiv.appendChild(addNewTaskButton)

    return addNewTaskDiv
}