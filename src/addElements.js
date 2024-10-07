import { createAddProjectButton, createAddTaskButton } from "./createButtons"
import { createProjectContainer, createTaskContainer } from "./createContainers"

export const addElements = () => {
    const projectsDiv = document.querySelector(".projects")
    const tasksDiv = document.querySelector(".tasks")

    const addNewTaskSection = createAddTaskButton()
    const taskContainer = createTaskContainer()
    const addNewProjectSection = createAddProjectButton()
    const projectContainer = createProjectContainer()

    projectsDiv.appendChild(addNewProjectSection)
    projectsDiv.appendChild(projectContainer)
    tasksDiv.appendChild(addNewTaskSection)
    tasksDiv.appendChild(taskContainer)

}