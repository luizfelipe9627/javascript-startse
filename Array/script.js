/*
  Um Array no JavaScript é um objeto com um construtor único, com uma sintaxe literal e com um conjunto adicional de propriedades e de métodos herdados de um protótipo de Array. 
  Arrays em JavaScript são usados para armazenar vários valores em uma única variável.
*/

// Um array vazio que poderá ser preenchido durante a inicialização.
let arrayVazio = [];

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Um array produtos, com propriedades definidas para usar na inicialização.
let produtos = [
  'Camiseta',
  'Calça',
  'Blusa',
];

// Está sobrescrevendo o valor do índice 1, que no caso é a Calça.
produtos[1] = 'Casaco';

// Também podemos trabalhar com outros tipos de valores.
produtos[2] = 50;

// Como podemos ver no console, o primeiro item começa sempre do índice 0 e em diante.
console.log(`Sou uma Array:` ,produtos);

// Assim como nos objetos podemos filtrar um array também.
console.log(`Sou uma Array sendo filtrada:`, produtos[1]);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Podemos criar vários objeto dentro de uma array.
let jogadores = [
  {
    nome: 'Beto',
    posicao: 'Atacante',
  },
  {
    nome: 'Giovanni',
    posicao: 'Zagueiro',
  },
];

// Irá mostrar todos os objetos e suas propriedades.
console.log(`Sou um objeto dentro de uma array:`, jogadores);

// Podemos selecionar o objeto desejado.
console.log(`Sou um objeto filtrado dentro de uma array:`, jogadores[0]);

// Ou podemos selecionar uma propriedade dentro do objeto.
console.log(`Sou um propriedade dentro de um objeto que está dentro de uma array:`, jogadores[1].nome)

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let email = 'exemplo@email.com';

// O split é usado para separar/dividir a frase a partir de tal parte transformando ela em uma array.
let emailArray = email.split('@');

//Irá mostrar as duas arrays criadas.
console.log(`Eu era uma frase completa, agora fui dividida:`, emailArray);

// Podemos selecionar o objeto criado dentro da array.
console.log(`Continuo dividida mas agora estou sendo filtrada:`, emailArray[1]);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let palavrasChave = 'Cinema, Futebol, Televisão, Viagem, Boliche';

// O split irá selecionar até o final da palavra, até encontrar uma virgula, então ele irá para o próximo e assim em diante.
let hobbies = palavrasChave.split(',');

// Irá mostrar no console uma array com 5 objetos.
console.log(`Fui transformado de string em uma array com 5 objetos:`, hobbies);

// Podemos acessar a propriedade do objeto diretamente mais de um jeito diferente.
// Nesse jeito ele irá começar de trás para frente e pegar o que tiver na segunda posição.
console.log(`Acessando a propriedade de um objeto de um jeito diferente:`, hobbies[hobbies.length-2]);

// O toString é usado para transformar objetos/arrays em strings.
let tiposHobbies = hobbies.toString();

// Irá exibir as frases que antes era array em string novamente.
console.log(`Eu era uma array agora sou string novamente:`, tiposHobbies);

// Temos também o join que faz o oposto do split, ele transformar em string e também separa as strings conforme desejado.
let separadorHobbies = hobbies.join(' |');

// Irá exibir as strings com o separador escolhido.
console.log(`Estou separando cada palavra pelo caractere escolhido:`, separadorHobbies);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');