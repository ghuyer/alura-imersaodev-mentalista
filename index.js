var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
elementoResultado.innerHTML = "."
elementoResultado.style.opacity = 0

function Chutar() {
  var chute = parseInt(document.getElementById("inputNumero").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Errou!";
  }
 
  buttonChutar.setAttribute("disabled", true)
  elementoResultado.style.opacity = 1

  setTimeout(function() {
  elementoResultado.style.opacity = 0;
  buttonChutar.removeAttribute("disabled");
}, 3000)
}
