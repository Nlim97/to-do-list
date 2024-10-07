import { capitaliseString } from "./capitaliseString"
import { createProjectTab } from "./createTabs"

export const displayStoredProjects = () => {
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        const project = localStorage.getItem(key)
        const parsedProject = JSON.parse(project)
        createProjectTab(parsedProject)
    }
}

export const displayTask = (taskArray, projectTitle) => {
    const tasksContainer = document.querySelector(".tasks-container")
    tasksContainer.innerHTML = ""
    taskArray.forEach(task => {
        const taskDiv = document.createElement("div")
        const taskTitle = document.createElement("h3")
        const taskDescription = document.createElement("p")
        const deleteTaskButton = document.createElement("button")

        taskDiv.classList.add(task.title)
        taskTitle.innerHTML = capitaliseString(task.taskTitle)
        taskDescription.innerHTML = task.taskDescription
        deleteTaskButton.innerHTML = "❌"
        
        

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDescription)
        taskDiv.appendChild(deleteTaskButton)
        tasksContainer.appendChild(taskDiv)

        deleteTaskButton.addEventListener("click", (e) => {
            const task = e.target.closest("div")
            const taskTitle = task.querySelector("h3").innerHTML
            
            task.remove()
        })
    })

}