const myLanguages = [
    "JavaScripts",
    "Python",
    "PHP",
    "Java",
    "Swift",
    "Ruby",
    "C#",
    "C++",
    "Go",
    "Dart",
    "Cobol"
]

const listLanguages = document.querySelector("#list-languages")

const renderElementList = (name) => {
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
