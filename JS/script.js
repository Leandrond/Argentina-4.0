const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

// function mostraroculto() {
//   const poculto = document.querySelector("#oculto");
//   if (poculto.style.display === "none") {
//     poculto.style.display = "block";
//   } else {
//     poculto.style.display = "none";
//   }
// }
 // Obtener referencias a los elementos del DOM
 const btnMostrar = document.querySelector("#mostrar");
 const h1Titulo = document.querySelector("#oculto");

 // Agregar un evento de clic al botón
 btnMostrar.addEventListener("click", function () {
   // Mostrar el elemento h1 cambiando su estilo
   h1Titulo.style.display = "block";
 });