export const saveProject = (projectObj) => {
    localStorage.setItem(projectObj.title, JSON.stringify(projectObj))
}