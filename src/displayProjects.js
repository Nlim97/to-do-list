import { createProjectTab } from "./createTabs"

export const displayStoredProjects = () => {
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        const project = localStorage.getItem(key)
        const parsedProject = JSON.parse(project)
        createProjectTab(parsedProject)
    }
}