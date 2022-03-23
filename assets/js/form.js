const saveButtonElement = document.querySelector("#save")
saveButtonElement.addEventListener("click", (event) => {
    event.preventDefault()
    let inputValue = document.querySelector("input")
    console.log(inputValue.value)
    console.log("Guardar")
    myLanguages.push({name: inputValue.value, complete: false, start: true})
})
