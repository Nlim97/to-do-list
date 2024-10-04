import { createProjectTab } from "./createTabs"
import { saveProject } from "./localStorage"

export const submitAddProjectForm = (formData) => {
    const projectTitle = formData.get("title")
    const projectDescription = formData.get("project-description")
    const projectDueDate = formData.get("due-date")
    const projectPriority = formData.get("priority")

    if(localStorage.getItem(projectTitle)){
        alert("pick another project name")
    }

    const projectObj = {
        title: projectTitle,
        projectDescription: projectDescription,
        projectDueDate: projectDueDate,
        projectPriority: projectPriority,
        tasks: []
    }

    saveProject(projectObj)
    createProjectTab(projectObj)
}   