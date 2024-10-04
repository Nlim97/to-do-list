import { displayStoredProjects } from "./displayProjects"
import { submitAddProjectForm } from "./submitForm"

export const intialiseEventHandlers = () => {
    const addProjectForm = document.querySelector(".project-form-container")
    const closeButton = document.querySelector(".close-project-form")
    const form = document.querySelector("#project-form")

    closeButton.addEventListener("click", () => closeProjectForm(addProjectForm))

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form);
        submitAddProjectForm(formData)
        form.reset()
        closeProjectForm(addProjectForm)

    })

}




export const showAddProjectForm = () => {
    const addProjectForm = document.querySelector(".project-form-container")
    addProjectForm.style.display = "flex" 

}

export const closeProjectForm = (addProjectForm) => {
    addProjectForm.style.display = "none"
}