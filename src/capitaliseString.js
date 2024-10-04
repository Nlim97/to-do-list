export const capitaliseString = (str) => {
    const strArr = str.split("")
    const firstLetter = strArr.shift().toUpperCase()
    strArr.unshift(firstLetter)
    return strArr.join("")
}