import { createProjectTab } from "./createTabs"
import { displayTask } from "./displayProjectsAndTasks"
import { saveProject, saveTask } from "./localStorage"
import { showTask } from "./showTask"


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

export const submitTaskForm = (formData, projectTitle) => {
    const taskTitle = formData.get("task-title")
    const taskDescription = formData.get("task-description")

    const taskObj = {
        taskTitle : taskTitle,
        taskDescription: taskDescription
    }
    saveTask(taskObj, projectTitle)
    showTask(projectTitle)
}
