import { createAddProjectButton, createAddTaskButton } from "./createButtons"

export const addElements = () => {
    const projectsDiv = document.querySelector(".projects")
    const tasksDiv = document.querySelector(".tasks")

    const addNewProjectSection = createAddProjectButton()
    const addNewTaskSection = createAddTaskButton()

    projectsDiv.appendChild(addNewProjectSection)
    tasksDiv.appendChild(addNewTaskSection)
}