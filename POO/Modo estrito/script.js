// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi criado um elemento que recebe uma string.
// nome = 'Ana';
// Por conta do USE STRICT temos que usar variáveis.
let nome = 'Ana';
console.log('Sou uma variável chamada nome recebendo uma string:', nome);

// Percebe-se que mesmo criando um elemento sem uma variável ele trocou o valor da variável nome anterior.
nome = 'Pedro';
console.log('Sou uma string sem uma variável:', nome);



// Criado dois elementos sem uma variável.
nome = 'Ana';
nome = 'Pedro'

function exibeNome(nome) {
  // Podemos definir o modo estrito somente e dentro da função.
  'use strict';
  // Irá dar erro pois o USE STRICT obriga a usar uma variável.
  // a = 30;
  let a = 30;
  console.log('Sou uma variável chamada A armazenando um number:', a);
  console.log('Sou um elemento sem uma variável, chamada de nome:', nome);
}

// Está invocando a função exibeNome e recebendo o parâmetro nome.
exibeNome(nome);

