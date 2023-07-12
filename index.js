import { seleccionRandom } from "./funciones.js";
const opciones = document.getElementById("opciones"),
  tagCont = document.getElementById("tag");
opciones.focus();
const crearOpciones = (input) => {
    const tags = input
      .split(".")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());
    tagCont.innerHTML = "";
    tags.forEach((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.classList.add("tag");
      tagSpan.innerText = tag;
      tagCont.appendChild(tagSpan);
    });
  };
opciones.addEventListener("keyup", (e) => {
  crearOpciones(e.target.value);
  if(e.key === "Enter"){
    setTimeout(()=>{
        e.target.value=""
    },10)
    seleccionRandom();
  }
});
