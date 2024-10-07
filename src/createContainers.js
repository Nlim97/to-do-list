export const createProjectContainer = () => {
    const projectContainer = document.createElement("div")
    projectContainer.classList.add("projects-container")
    return projectContainer
}

export const createTaskContainer = () => {
    const taskContainer = document.createElement("div")
    taskContainer.className = "tasks-container"
    return taskContainer
}