const myLanguages = [
    { name: "JavaScripts", complete: true, start: true },
    { name: "Python", complete: false, start: false},
    { name: "PHP", complete: false, start: true},
    { name: "Java", complete: false, start: false},
    { name: "Swift", complete: false, start: false},
    { name: "Ruby", complete: false, start: false},
    { name: "C#", complete: false, start: false},
    { name: "C++", complete: true, start: false},
    { name: "Go", complete: false, start: false},
    { name: "Dart", complete: false, start: false},
    { name: "Cobol", complete: false, start: false}
]

const listLanguages = document.querySelector("#list-languages")
const languagePendingElement = document.querySelector("#language-pending")
const languageCompleteElement = document.querySelector("#language-complete")
const languageAllElement = document.querySelector("#language-all")

const languageComplete = myLanguages.filter(({complete}) => complete === true)
const languagePending = myLanguages.length - languageComplete.length

const renderElementList = ({name , complete, start}) => {
    //Crear elementos
    let listElement = document.createElement("li")
    let iconBox = document.createElement("div")
    let iconPlay = document.createElement("i")
    let iconPause = document.createElement("i")
    let iconCheck = document.createElement("i")

    listElement.innerText = name
    //Asignar las clases correspondientes a los iconos
    iconCheck.classList.add( "bi", "bi-check-circle-fill", "text-success")
    iconPause.classList.add( "bi", "bi-x-circle-fill", "text-danger")
    iconPlay.classList.add( "bi", "bi-pause-circle-fill", "text-primary")
    //Asignar las clases al li 
    listElement.classList.add ("list-group-item", "d-flex", "justify-content-between")
    //Insertar li en ul
    listLanguages.appendChild(listElement)
    //Insertar div en li
    listElement.appendChild(iconBox)
    //Insertar i en div
        if (complete){
        iconBox.appendChild(iconCheck) 
    }   else if(start && !complete){
        iconBox.appendChild(iconPlay)
    } else {
        iconBox.appendChild(iconPause)
    }
}

myLanguages.forEach(renderElementList)
languagePendingElement.innerText = languagePending
languageCompleteElement.innerText = languageComplete.length
languageAllElement.innerText = myLanguages.length
