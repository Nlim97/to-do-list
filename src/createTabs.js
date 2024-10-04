import { capitaliseString } from "./capitaliseString"

export const createProjectTab = (parsedProject) => {
    const projectsDiv = document.querySelector(".projects-container")
    const projectDiv = document.createElement("div")
    const projectTitle = document.createElement("h4")
    const projectDescription = document.createElement("p")
    const projectDueDate = document.createElement("p")
    const projectPriority = document.createElement("p")
    const projectTasks = document.createElement("p")

    projectDiv.classList.add("project-tab")
    projectTitle.classList.add("project-title")


    projectTitle.innerHTML = capitaliseString(parsedProject.title)
    projectDescription.innerHTML = parsedProject.projectDescription
    projectDueDate.innerHTML = parsedProject.projectDueDate
    projectPriority.innerHTML = parsedProject.projectPriority
    projectTasks.innerHTML = parsedProject.tasks.length

    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(projectDescription)
    projectDiv.appendChild(projectDueDate)
    projectDiv.appendChild(projectPriority)
    projectDiv.appendChild(projectTasks)

    projectsDiv.appendChild(projectDiv)
}