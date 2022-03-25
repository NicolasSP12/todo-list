// 1- Verificar si myLanguages existe, si no crear un array vacio con esa key (@myLanguage)

if (!localStorage.getItem("@myLanguages")) {
  localStorage.setItem("@myLanguages", JSON.stringify([]));
}

//  2- Leemos los valores almacenados en la key @myLanguage

const myLanguages = JSON.parse(localStorage.getItem("@myLanguages"))

//  3- Seleccionamos los elementos principales de nuestro sitio para utilizar la renderizacion de elementos y visualización de datos

const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");
const languageCompleteElement = document.querySelector("#language-complete");
const languageAllElement = document.querySelector("#language-all");

/* 4- Creamos una función que renderiza todos los elementos para representar los lenguajes de programación y asignamos clases y atributos
  DOCUMENTACIÓN:
  CLASES:
  * https://developer.mozilla.org/es/docs/Web/API/Element/classList
  * https://www.w3schools.com/jsref/prop_element_classlist.asp

  CREATE ELEMENT:
  * https://developer.mozilla.org/es/docs/Web/API/Document/createElement
  * https://www.w3schools.com/jsref/met_document_createelement.asp
  
  INNER TEXT:
  * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
  * https://www.w3schools.com/jsref/prop_node_innertext.asp
  
  APPRENDCHILD:
  * https://www.w3schools.com/jsref/met_node_appendchild.asp
  * https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
*/
const renderElementList = ({ name, complete, start }, index) => {
  //  4.1 Crear elementos necesario
  let listElement = document.createElement("li");
  let iconBox = document.createElement("div");
  let iconPlay = document.createElement("i");
  let iconPause = document.createElement("i");
  let iconCheck = document.createElement("i");
  let deleteButton = document.createElement("button");
  //  4.2 Asignamos las clases correspondientes a los iconos
  iconPlay.classList.add("bi", "bi-play-circle-fill", "text-primary");
  iconCheck.classList.add("bi", "bi-check-circle-fill", "text-success");
  iconPause.classList.add("bi", "bi-pause-circle-fill", "text-warning");
  deleteButton.classList.add("bi", "bi-trash3-fill", "text-danger");
  deleteButton.setAttribute("type", "submit");
  deleteButton.setAttribute("index", index);

  listElement.innerText = name;
  listElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  //  4.3 Insertar li en ul
  listLanguagesElement.appendChild(listElement);
  //  4.4 Insertar div en li
  listElement.appendChild(iconBox);
  //  4.5 Insertar i en div
  if (complete) {
    iconBox.appendChild(iconCheck);
  } else if (start && !complete) {
    // start && complete === false
    iconBox.appendChild(iconPlay);
  } else {
    iconBox.appendChild(iconPause);
  }
  iconBox.appendChild(deleteButton);
};

//  5- Comprobar si la key @myLanguages tiene datos o esta vacio.

if (myLanguages.length > 0) {
  myLanguages.forEach(renderElementList);
} else {
  listLanguagesElement.insertAdjacentHTML(
    "afterbegin",
    "<h3 class='text-center p-3'>Languages not found</h3>"
  );
}
//  6- Comprobar la cantidad de lenguajes completados o iniciados y los lenguajes iniciados y completados

const languageComplete = myLanguages.filter(
  ({ complete }) => complete === true
);

const languagePending = myLanguages.length - languageComplete.length;

//  7- Realizar el calculo de "All languages", "Languages complete" y "Languages pending"

languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;

//  8- Detectar el evento click sobre el elemento UL

listLanguagesElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let position = event.target.getAttribute("index")
    myLanguages.splice(parseInt(position), 1)
    localStorage.setItem("@myLanguages", JSON.stringify(myLanguages))
  }
})

// const deleteLanguage = (button, index) => {
//   button.addEventListener("click", () => {
//     console.log(myLanguages.indexOf(myLanguages[index]));
//   });
// };

// // Asignando eventos
// const deleteButtonsElements = Array.from(
//   document.querySelectorAll("button.bi-trash3-fill")
// );

// deleteButtonsElements.forEach(deleteLanguage);

// Diferentes manera de escribir condicionales
// const aprendido = false
// aprendido && console.log(aprendido)
// aprendido ? console.log(aprendido) : console.log('no aprendido')
// if (aprendido === true ){
//   console.log(aprendido)
// } else {
//   console.log('no aprendido')
// }

// Ejemplo de destructuración
// const {name, complete} = myLanguages[4]
// console.log(myLanguages[4].name, myLanguages[4].complete)
// console.log(name, complete)
// console.table(myLanguages)