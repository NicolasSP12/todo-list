const myLanguages = [
    { name: "JavaScripts", complete: true, start: true },
    { name: "Python", complete: false, start: false},
    { name: "PHP", complete: false, start: false},
    { name: "Java", complete: false, start: false},
    { name: "Swift", complete: false, start: false},
    { name: "Ruby", complete: false, start: false},
    { name: "C#", complete: false, start: false},
    { name: "C++", complete: false, start: false},
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

const renderElementList = ({name}) => {
    let language = document.createElement("li")
    language.innerText = name
    language.classList.add (
        "list-group-item", 
        "d-flex", 
        "justify-content-between"
    )
    listLanguages.appendChild(language)
}

myLanguages.forEach(renderElementList)
languagePendingElement.innerText = languagePending
languageCompleteElement.innerText = languageComplete.length
languageAllElement.innerText = myLanguages.length
