/* 
  Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo.
  
  As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.
  
  As variáveis de const não podem ser atualizadas nem declaradas novamente.
*/

// Foi criado uma variável chamada num.
let num;
// Irá resultar undefined no console pois ele está pegando somente a variável sem um valor.
console.log(num);
// Num está recebendo o valor de 3.
num = 3;
// Irá mostrar no console o valor de num.
console.log(num);


// Foi definido um nome na variável primeiroNome.
var primeiroNome = 'Gabriel';
// Está sobrescrevendo o valor da variável primeiroNome.
var primeiroNome = 'Maria' 
// Mostrando o nome no console.
console.log(primeiroNome); 


// Criada uma variável A e B.
let a, b;
// Está armazenando o valor 2 na variável A e em seguida o valor 3 na variável B.
a = 2;
b = 3;
// Está fazendo a soma do valor armazenado na variável A e B.
let soma = a + b;
// Irá mostrar o resultado da soma no console.
console.log(soma);


// Uma const armazenando o valor de PI que não pode ser alterado ou declarado novamente.
const pi = 3.1416;
// O raio pode ser alterado ou declarado novamente pois usa let, está armazenando o valor 3.
let raio = 3;
// O comprimentoCircuferencia pode ser alterado ou declarado novamente pois usa let, está armazenando o valor 2, vezes o valor de pi, vezes o valor de raio.
let comprimentoCircuferencia = 2 * pi * raio;
// Irá apresentar o resultado no console.
console.log(comprimentoCircuferencia)