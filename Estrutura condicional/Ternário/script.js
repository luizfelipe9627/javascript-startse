console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if .
*/

// Criado duas variáveis do tipo number.
let nota1 = 2, nota2 = 5;

// Função media declarada, tendo dois parâmetros, N1 e N2 que vai ser definida pelo media do resultado.
// Em seguida irá retornar a soma dos dois parâmetros e depois dividir por 2.
function media(n1, n2) {
  return (n1 + n2) / 2;
}

// Está atribuindo os valores aos parâmetros da função media.
let resultado = media(nota1, nota2);

// Irá mostrar no console o resultado.
console.log(`${nota1 + nota2} / 2 é igual a:`, resultado);

// Está falando que SE o resultado for maior ou igual ao valor logo depois da interrogação(?), ele irá executar a condição e se for falso ele irá continuar até chegar no ultimo.
let situacao = (resultado >= 6) ? `Aprovado com a média: ${resultado}` : 
               (resultado >= 4) ? `Em recuperação com a média: ${resultado}` :
                                  `Reprovado com a média: ${resultado}`;

// Irá mostrar o resultado no console.
console.log('Eu estou usando Ternário:', situacao);

// O Ternário é exatamente a mesma coisa que usar o IF e ELSE.
// Esse é o mesmo exemplo de cima, só que em IF e ELSE.
if(resultado >= 6) {
  situacao = '`Aprovado com a média: ${resultado}`';
} else if (resultado >= 4) {
  `Em recuperação com a média: ${resultado}`;
} else {
  situacao = `Reprovado com a média: ${resultado}`;
}

// Irá mostrar o resultado no console.
console.log('Estou usando IF e ELSE:', situacao);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');