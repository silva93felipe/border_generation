var containerPrincipal = document.querySelector('.containerPrincipal');
var resultado = document.querySelector('.resultado');

function geraBordas() {
    var supEsquerdoValor = document.querySelector('.supEsquerdoValor').value;
    var supDireitoValor = document.querySelector('.supDireitoValor').value;
    var infEsquerdoValor = document.querySelector('.infEsquerdoValor').value;
    var infDireitoValor = document.querySelector('.infDireitoValor').value;
    var tela = containerPrincipal.style.borderRadius = `${supEsquerdoValor}px ${supDireitoValor}px ${infDireitoValor}px ${infEsquerdoValor}px`;
    resultado.innerHTML = `border-radius `+ tela;
}

