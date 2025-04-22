

//Agregando Home con JS

function cargarHome() {
  fetch("/home/index.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("home").innerHTML = html;
      activarHamburguesa();
    })
    .catch((error) => console.error("Error cargando navbar:", error));
}


document.addEventListener("DOMContentLoaded", cargarHome);





