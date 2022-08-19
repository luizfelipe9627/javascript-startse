// Responsável por ler a entrada de dado do usuário.
let lerValor = prompt("Digite o seu nome: ");

// Responsável por validar e informar a saída de dado, no caso o valor digitado pelo o usuário.
if(lerValor === '' ) {
  alert("O espaço não pode ficar em branco!");
} else {
  alert(`Seja muito bem vindo, ${lerValor}.`);
}
