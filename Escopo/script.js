/* 
  A variável global por ser colocada no próprio escopo do arquivo é visível e usadas por todos, até mesmo dentro de funções.
*/

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Variável global
let x = 10; 
console.log(`Eu sou uma variável global chamada X:`, x);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

function soma(a, b) {
  // É visível pois está definida no escopo do arquivo.
  console.log(`Eu faço parte de uma variável global, e estou dentro de um escopo de função:`, x);

  // Dentro da função se chama limites da função ou escopo, que é o corpo da função.
  // Variável local.
  let z = a + b; 

  // O return é responsável também por finalizar a função.
  return z;
}

// Irá dar erro pois o Z e nem os parâmetros são visíveis no escopo do arquivo pois ela é uma variável local, ela é visível somente no escopo da função.
// console.log(z);
// console.log(a, b);
console.log(`Eu estou recebendo os parâmetros de uma função chamada Soma e atribuindo argumentos nela:`, soma(4, 23))

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Variável const global.
const gravidade = 9.8; 
console.log(`Eu sou uma variável const global chamada Gravidade:`, gravidade)

function calculaVeloQueda(tempo) {
  // Mesmo sendo constante ela pode ser usada dentro de uma função, pois ela é global.
  const resultado = gravidade * tempo;

  // O return é responsável também por finalizar a função.
  return resultado; 
}

console.log(`Eu estou recebendo os parâmetros de uma função chamada CalculaVeloQueda e atribuindo argumento nela:`, calculaVeloQueda(30));

// Como podemos ver podemos usar a mesma const fora do escopo da função, pois dentro do escopo ela não é visível, agora ela é visível pois foi definida fora da função.
const resultado = 0;
console.log(`Eu sou uma const global chamada Resultado:`, resultado);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Uma função criada para converter o KM para Milhas.
function calcularKmMilha() {
  // Está selecionando o input pelo ID e pegando o valor que o usuário atribuiu a ele.
  let km = document.querySelector('#valorMilha').value;

  // Está selecionando o span que mostra o calculo na tela. Em seguida mudando o texto  do span para o resultado do cálculo.
  document.querySelector('#resultado').textContent = km * 1.609;
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');