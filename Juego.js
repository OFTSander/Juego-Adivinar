//Swanalert mejorar

function generacionNumeroSecreto() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  let numeroSecreto = generacionNumeroSecreto();
  
  let inputValorIngresado = document.getElementById("valorIngresado");
  let botonJugar = document.getElementById("jugar");
  let botonReiniciar = document.getElementById("reiniciar");
  
  function asignacionTextodeUsuario(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
  }
  
  botonJugar.addEventListener("click", () => {
    let valorIngresado = parseInt(inputValorIngresado.value);
  
    if (valorIngresado === numeroSecreto) {
      Swal.fire({
        title: "¡ADIVINASTE!",
        text: `El número secreto escondido era ${numeroSecreto}`,
        icon: "success",
      });
      botonJugar.enabled = true;
      botonReiniciar.disabled = false;
    } else {
      let mensaje = valorIngresado > numeroSecreto ? "menor" : "mayor";
      Swal.fire({
        title: "¡FALLASTE!",
        text: `El número escondido es ${mensaje} al ingresado`,
        icon: "error",
      });
    }
  });
  
  botonReiniciar.addEventListener("click", () => {
    numeroSecreto = generacionNumeroSecreto();
    botonReiniciar.disabled = true;
    botonJugar.enabled = false;
    inputValorIngresado.value = "";
  });
  
  asignacionTextodeUsuario("h1", "Juego del número secreto");
  asignacionTextodeUsuario("p", "Digita un número del 1 al 20");
  
  
  