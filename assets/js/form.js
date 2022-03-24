//  9- Seleccionamos el elemento con el id "#language-form" para ingresar nuevos lenguajes

const formLanguageElement = document.querySelector("#language-form");

//  10- Seleccionamos el elemento con el id "#language-form" para ingreso de nuevos lenguajes

formLanguageElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const { language, complete, start } = event.target;
  // console.log(event.target.language, event.target.complete, event.target.start);
  myLanguages.push({
    name: language.value,
    complete: complete.checked,
    start: start.checked,
  })
//  10.1- Moficamos la variable myLanguages agregando los datos recolectando en el formulario en forma  de object
  localStorage.setItem("@myLanguages", JSON.stringify(myLanguages))
});

//console.log('Primera carga de la aplicación', myLanguages);