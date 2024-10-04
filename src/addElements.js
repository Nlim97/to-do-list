import { createAddProjectButton, createAddTaskButton } from "./createButtons"
import { createProjectContainer } from "./createContainers"

export const addElements = () => {
    const projectsDiv = document.querySelector(".projects")
    const tasksDiv = document.querySelector(".tasks")

    const addNewProjectSection = createAddProjectButton()
    const addNewTaskSection = createAddTaskButton()
    const projectContainer = createProjectContainer()

    projectsDiv.appendChild(addNewProjectSection)
    projectsDiv.appendChild(projectContainer)
    tasksDiv.appendChild(addNewTaskSection)

}