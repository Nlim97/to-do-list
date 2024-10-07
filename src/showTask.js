import { displayTask } from "./displayProjectsAndTasks"

export const showTask = (projectTitle) => {
    for(let i = 0; i < localStorage.length; i++){
        const projectKey = localStorage.key(i)
        if(projectKey === projectTitle){
            const currentProject = localStorage[projectKey]
            const parsedCurrentProject = JSON.parse(currentProject)
            const parsedCurrentProjectTaskArray = parsedCurrentProject.tasks
            displayTask(parsedCurrentProjectTaskArray, projectTitle)
        }
    }
    
}
