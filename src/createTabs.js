import { capitaliseString } from "./capitaliseString"
import { deleteProject } from "./localStorage"
import { showTask } from "./showTask"



export const createProjectTab = (parsedProject) => {
    const projectsDiv = document.querySelector(".projects-container")
    const projectDiv = document.createElement("div")
    const projectTitle = document.createElement("h4")
    const projectDescription = document.createElement("p")
    const projectDueDate = document.createElement("p")
    const projectPriority = document.createElement("p")
    const projectTasks = document.createElement("p")
    const deleteProjectButton = document.createElement("button")

    projectDiv.classList.add("project-tab")
    projectTitle.classList.add("project-title")


    projectTitle.innerHTML = capitaliseString(parsedProject.title)
    projectDescription.innerHTML = parsedProject.projectDescription
    projectDueDate.innerHTML = parsedProject.projectDueDate
    projectPriority.innerHTML = parsedProject.projectPriority
    projectTasks.innerHTML = parsedProject.tasks.length
    deleteProjectButton.innerHTML = "❌"

    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(projectDescription)
    projectDiv.appendChild(projectDueDate)
    projectDiv.appendChild(projectPriority)
    projectDiv.appendChild(projectTasks)
    projectDiv.appendChild(deleteProjectButton)

    projectDiv.addEventListener("click", () => {
        const taskButton = document.querySelector(".add-task")
        const taskForm = document.querySelector("#task-form")
        if(taskButton.style.display === "none"){
            taskButton.style.display = "flex"
            taskForm.className = parsedProject.title
        }else{
            taskForm.className = parsedProject.title
        }
        showTask(parsedProject.title)
    })

    deleteProjectButton.addEventListener("click", (e) => {
        e.stopPropagation()
        const project = e.target.closest("div")
        const projectName = project.querySelector("h4").innerHTML
        project.remove()
        deleteProject(projectName)
    })

    projectsDiv.appendChild(projectDiv)
}

