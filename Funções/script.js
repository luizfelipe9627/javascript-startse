/*
  Funções são blocos de construção fundamentais em JavaScript. 
  Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
  Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Dentro da função foi definido dois parâmetros. Um responsável por puxar o primeiro nome e outro puxar o segundo o ultimo nome.
// Função declarada.
function exibirMensagem(primeiroNome, ultimoNome) {
  alert(`Olá ${primeiroNome} ${ultimoNome}, como você está hoje?`);
}

// Dentro da função está sendo atribuído um argumento para enviar para os parâmetros primeiroNome e ultimoNome.
// Invocando a função.
exibirMensagem('Luiz Felipe', 'Silva');

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Função declarada.
function mediaAritmetica(a, b) {
  // Por padrão tudo aplicado dentro de uma função fica preso dentro do escopo, não pode ser usado fora.
  // Por isso usamos return, ele irá retornar a variável assim deixando ela livre para ser usado fora da função.
  return (a + b) / 2; 
}

// Uma variável que recebe a invocação da função com os parâmetros A e B e em seguida define os argumentos.
let resultado = mediaAritmetica(10, 5);
console.log(resultado);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');