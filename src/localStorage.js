export const saveProject = (projectObj) => {
    localStorage.setItem(projectObj.title, JSON.stringify(projectObj))
}

export const saveTask = (taskObj, projectTitle) => {
    for(let i = 0; i < localStorage.length; i++){
        const projectKey = localStorage.key(i)
        if(projectKey === projectTitle){
            const currentProject = localStorage.getItem(projectKey)
            const parsedCurrentProject = JSON.parse(currentProject)
            parsedCurrentProject.tasks.push(taskObj)
            localStorage.setItem(projectKey, JSON.stringify(parsedCurrentProject))
            console.log(localStorage[projectKey])
        }else{
            alert("Project not found")
        }
    }
}

export const deleteTask = (taskTitle) => {
    for(let i = 0; i < localStorage.length; i++){
        const projectKey = localStorage.key(i)
        if(projectKey === projectTitle){
            const currentProject = localStorage.getItem(projectKey)
            const parsedCurrentProject = JSON.parse(currentProject)
            parsedCurrentProject.tasks.push(taskObj)
            localStorage.setItem(projectKey, JSON.stringify(parsedCurrentProject))
            console.log(localStorage[projectKey])
        }else{
            alert("Project not found")
        }
    }
}