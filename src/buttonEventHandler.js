import { submitAddProjectForm, submitTaskForm } from "./submitForm"

export const intialiseEventHandlers = () => {
    const addProjectForm = document.querySelector(".project-form-container")
    const closeProjectButton = document.querySelector(".close-project-form")
    const ProjectForm = document.querySelector("#project-form")

    const addTaskForm = document.querySelector(".task-form-container")
    const closeTaskForm = document.querySelector(".close-task-form")
    const taskForm = document.querySelector("#task-form")

    closeProjectButton.addEventListener("click", () => closeForm(addProjectForm))

    ProjectForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(ProjectForm);
        submitAddProjectForm(formData)
        ProjectForm.reset()
        closeForm(addProjectForm)

    })

    closeTaskForm.addEventListener("click", () => {closeForm(addTaskForm)})

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const projectTitle = taskForm.className
        const formData = new FormData(taskForm);
        submitTaskForm(formData, projectTitle)
        taskForm.reset()
        closeForm(addTaskForm)
    })

}




export const showForm = (projectOrTaskContainer) => {
    projectOrTaskContainer.style.display = "flex" 

}

export const closeForm = (projectOrTaskForm) => {
    projectOrTaskForm.style.display = "none"
}