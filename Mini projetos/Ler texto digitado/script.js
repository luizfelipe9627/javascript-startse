// Está puxando o input do HTML.
let meuInput = document.getElementById("meu-input");

// Função responsável por mostrar o valor digitado.
function mostrarValor() {
  alert(`O que você escreveu foi -> ${meuInput.value}`);
}

// Está puxando o button do HTML.
let meuButton = document.getElementById("meu-button");

// Faz acontecer um evento quando o botão é clicado.
meuButton.addEventListener('click', () => {
  if(meuInput.value === '') {
    alert("O input não pode ficar em branco!");
  } else {
    mostrarValor();
  }
});
