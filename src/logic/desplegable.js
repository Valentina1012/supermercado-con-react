export const desplegable = (e) => {
    const currentElement = e.target

    if(currentElement.matches('[data-dropdown], [data-dropdown] *')) { // Pregunta si el elemento actual tiene un atributo data-dropdown o su hijo lo tiene
        const parentLi = currentElement.closest("li")
        if(parentLi.matches("[data-toggle]")) {
            // Quitar el atributo
            parentLi.removeAttribute("data-toggle")
        } else {
            parentLi.setAttribute("data-toggle", "")
        }
    } 
}