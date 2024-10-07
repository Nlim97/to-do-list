export const saveProject = (projectObj) => {
    localStorage.setItem(projectObj.title, JSON.stringify(projectObj))
}

export const deleteProject = (projectName) => {
    const key = projectName.toLowerCase()
    localStorage.removeItem(key)
}

export const saveTask = (taskObj, projectTitle) => {
    let projectFound = false
    for(let i = 0; i < localStorage.length; i++){
        const projectKey = localStorage.key(i)
        if(projectKey === projectTitle){
            projectFound = true
            const currentProject = localStorage.getItem(projectKey)
            const parsedCurrentProject = JSON.parse(currentProject)
            parsedCurrentProject.tasks.push(taskObj)
            localStorage.setItem(projectKey, JSON.stringify(parsedCurrentProject))
            break;
        }
    }
    if(!projectFound){
        alert("project not found")
    }
}

export const deleteTask = (taskTitle, projectTitle) => {
    const lowerCasedTask = taskTitle.toLowerCase()
    for(let i = 0; i < localStorage.length; i++){
        const projectKey = localStorage.key(i)
        if(projectKey === projectTitle){
            const currentProject = localStorage.getItem(projectKey)
            const parsedCurrentProject = JSON.parse(currentProject)
            const tasks = parsedCurrentProject.tasks
            tasks.forEach((task, index) => {
                if(task.taskTitle.toLowerCase() === lowerCasedTask){
                    tasks.splice(index,1)
                    localStorage.setItem(projectKey, JSON.stringify(parsedCurrentProject))
                }
            })
        }
    }
}