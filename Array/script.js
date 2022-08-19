console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  Um Array no JavaScript é um objeto com um construtor único, com uma sintaxe literal e com um conjunto adicional de propriedades e de métodos herdados de um protótipo de Array. 
  Arrays em JavaScript são usados para armazenar vários valores em uma única variável.
  As Arrays são identificadas pelo "[]".
*/

// Um array vazio que poderá ser preenchido durante a inicialização.
let arrayVazio = [];

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

// console.clear() // Usado para limpar o console e facilitar a leitura.

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
console.log(`Sou um Objeto dentro de uma Array:`, jogadores);

// Podemos selecionar o objeto desejado.
console.log(`Sou um Objeto filtrado dentro de uma Array:`, jogadores[0]);

// Ou podemos selecionar uma propriedade dentro do objeto.
console.log(`Sou uma propriedade dentro de um Objeto que está dentro de uma Array:`, jogadores[1].nome)

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let email = 'exemplo@email.com';

// O split é usado para separar/dividir a frase a partir de tal parte transformando ela em uma array.
let emailArray = email.split('@');

//Irá mostrar as duas arrays criadas.
console.log(`Eu era uma frase completa, agora fui dividida pelo Split:`, emailArray);

// Podemos selecionar o objeto criado dentro da array.
console.log(`Continuo dividida mas agora estou sendo filtrada:`, emailArray[1]);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Array criada para usar com o exemplo de Split.
let palavrasChave = 'Cinema, Futebol, Televisão, Viagem, Boliche';

// O split irá selecionar até o final da palavra, até encontrar uma virgula, então ele irá para o próximo e assim em diante.
let hobbies = palavrasChave.split(',');

// Irá mostrar no console uma array com 5 objetos.
console.log(`Fui separado e transformado de String em uma Array com 5 Objetos pelo Split:`, hobbies);

// Podemos acessar a propriedade do objeto diretamente mais de um jeito diferente.
// Nesse jeito ele irá começar de trás para frente e pegar o que tiver na segunda posição.
console.log(`Acessando a propriedade de um Objeto de um jeito diferente:`, hobbies[hobbies.length-2]);

// O toString é usado para transformar objetos/arrays em strings.
let tiposHobbies = hobbies.toString();

// Irá exibir as frases que antes era array em string novamente.
console.log(`Eu era uma Array agora sou uma String novamente transformado pelo toString:`, tiposHobbies);

// Temos também o join que faz o oposto do split, ele transformar em string e também separa as strings conforme desejado.
let separadorHobbies = hobbies.join(' |');

// Irá exibir as strings com o separador escolhido.
console.log(`Estou sendo separa pelo Join a cada palavra pelo caractere escolhido:`, separadorHobbies);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Uma array vazia.
let cidades = [];
// Irá apresentar no console uma array vazia.
console.log(cidades);

// O push serve para adicionar elementos a uma array, ele adiciona sempre no final.
cidades.push('São Paulo', 'Rio de Janeiro', 'Fortaleza');
// Irá mostrar no console as duas arrays criadas a partir do final.
console.log('Eu sou uma Array criada pelo Push e adicionado ao final da Array:', cidades)

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Temos o Unshift que faz a mesma coisa que o Push mas vai adicionando no inicio.
cidades.unshift('Campinas', 'Araras', 'Bahia', 'Paraná');
// Irá mostrar no console novas arrays começando do inicio.
console.log('Eu sou uma Array criada pelo Unshift e adicionado ao inicio da Array:', cidades);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// O Pop é usado para remover o ultimo elemento de uma array e retornando ele.
let cidadeRemovida = cidades.pop();
// Irá mostrar no console todas as propriedades menos a ultima.
console.log('O Pop removeu o ultimo elemento da minha Array cidades e retornou ele:', cidadeRemovida)

// Podemos também simplesmente remover o ultimo elemento mas sem retornar ele, nesse caso como já usamos o Pop outra vez ele vai remover o penúltimo elemento.
cidades.pop();
// Irá mostrar no console o que tiver por ultimo.
console.log('Estou removendo o ultimo elemento de uma Array:', cidades)

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Ao contrario do Pop temos o Shift que remove o primeiro elemento retornando ele.
cidadeRemovida = cidades.shift();
// Irá apresentar o primeiro elemento da Array.
console.log('Estou removendo o primeiro elemento de uma Array:', cidadeRemovida);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Podemos usar o indexOf para localizar o índice de uma propriedade na Array.
let indice = cidades.indexOf('Paraná');
// Irá mostrar no console a posição de Paraná.
console.log('Estou apresentando o índice de uma cidade:', indice);

// Agora tendo o índice podemos utilizar o Splice que remove 1 ou mais itens/elementos, utilizando um índice.
// O primeiro parâmetro é o índice, utilizando o indexOf e o segundo é quantos é para remover a partir do índice apresentado.
cidades.splice(indice);
console.log(cidades);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Criado uma Array para usar como exemplo com o Concat.
let cidadeInterior = [
  'São Jose dos Campos',
  'Aparecida',
  'Sorocaba',
];
// Irá apresentar a Array cidadeInterior
console.log('Sou uma Array contendo cidades do interior de SP:', cidadeInterior);

// Criado outra Array para usar como exemplo com o Concat.
let regioesMetropolitanas = [
  'Barueri',
  'Cotia',
  'Arujá',
];
// Irá apresentar a Array regioesMetropolitanas.
console.log('Sou uma Array contendo regiões metropolitanas de SP:', regioesMetropolitanas);

// Podemos utilizar o Concat para concatenar uma array nova fazendo uma fusão com arrays já criadas.
let cidadesFusao = cidadeInterior.concat(regioesMetropolitanas);
// Irá mostrar as duas Arrays que antes eram separadas agora juntas.
console.log('Estou juntando duas Arrays em uma nova:', cidadesFusao);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Quando um elemento não é encontrado ele retorna como Undefined ou -1.
console.log('Estou puxando um índice que não existe:', regioesMetropolitanas.indexOf('Pinhais'));
console.log('Estou puxando um elemento que não existe:', regioesMetropolitanas[6]);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// console.clear() // Usado para limpar o console e facilitar a leitura.

// O Array.from é usado para separar cada letra em uma array com vários elementos dependendo do que for atribuído como seu parâmetro.
let x = Array.from('ABNT')
console.log(x);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// console.clear() // Usado para limpar o console e facilitar a leitura.

// Array criada como exemplo para usar com o Includes.
let paises = [
  'Brasil',
  'Estados Unidos',
  'China',
];

// O Includes é usado para verificar se há algum elemento presente na Array.
paisesProcurar = paises.includes('Brasil');
// Irá mostrar verdadeiro pois Brasil é um elemento de uma Array.
console.log('Vamos ver se está presente na Array:', paisesProcurar);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Array criada com vários Objetos para usar de exemplo com o Map.
let familia = [
  {
    nome: 'Caio',
    parentesco: 'Pai',
  },
  {
    nome: 'Maria',
    parentesco: 'Mãe',
  },
  {
    nome: 'Lais',
    parentesco: 'Irmã',
  },
  {
    nome: 'Gabriel',
    parentesco: 'Filho',
  },
];

// Declarado uma função que tem como parâmetro o F, que recebe o nome dos objetos da Array familia.
function obtemNomeFamilia(f) {
  // O return está sendo usado para que seja possível utilizar fora do escopo da função.
  return f.nome;
}

// O Map passa por cada Objeto da Array e joga para a função obtemNomeFamilia a posição de cada Objeto e procura por nome.
let nomeFamilia = familia.map(obtemNomeFamilia);

// Irá apresentar no console os nomes.
console.log('Irei mostrar o nome que tem dentro do Objeto da Array familia:', nomeFamilia);

// Basicamente a mesma coisa que a função anterior mais agora selecionando o parentesco.
function obtemParentescoFamilia(f) {
  return f.parentesco;
}

// O Map passa por cada Objeto da Array e joga para a função obtemParentescoFamilia a posição de cada Objeto e procura por parentesco.
let parentescoFamilia = familia.map(obtemParentescoFamilia);
// Irá apresentar no console os parentescos.
console.log('Irei mostrar o parentesco que tem dentro do Objeto da Array familia:', parentescoFamilia);

// Como de costume também podemos filtrar um Objeto:
console.log('Irei mostrar o parentesco que tem dentro do Objeto da Array familia, so que filtrado:', parentescoFamilia[2]);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Outra array criada com o intuito de demonstrar exemplo usando o Map.
let notas = [7,9,2,5,4];

// Função declarada tendo N como parâmetro que é enviado pelo Map, em seguida retorna o N mais 1.
function adicionarPonto(n) {
  return n + 1;
}

// O Map passa por cada Objeto da Array e joga para a função adicionarPonto.
// Depois ele executa a função.
let notasAtualizadas = notas.map(adicionarPonto);

// Irá mostrar no console as notas com um número acrescentado em cada.
console.log('Recebi 1 numero a mais em cada item do Array:', notasAtualizadas);

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// O filter é usado para

// Array criado para usar com o Filter.
let animais = [
  {
    animal: 'Perereca',
    classe: 'Anfíbio',
  },
  {
    animal: 'Jacaré',
    classe: 'Reptil',
  },
  {
    animal: 'Tartaruga',
    classe: 'Reptil',
  },
  {
    animal: 'Carneiro',
    classe: 'Mamífero',
  },
];

// Função declarada tendo A como parâmetro que é enviado pelo Filter, em seguida verifica se a Classe é exatamente igual a Reptil, como é ele retornou o valor.
function obtemClasse(a) {
  return a.classe === 'Reptil';
}

// Diferente do Map o Filter retorna o objeto todo.
// O Filter executa a função obtemClasse e depois irá ser responsável por encontrar um item de um objeto. 
// Se for false, se não for igual ele não irá retornar nada. Se for true ele retorna o objeto inteiro.
let animaisNome = animais.filter(obtemClasse);

// Como temos duas classes reptil ele irá mostrar 2 objetos no console.
console.log('Percorri cada um dos itens do objeto a procura de algo:', animaisNome);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// console.clear() // Usado para limpar o console e facilitar a leitura.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Função declarada, tendo A como parâmetro que vai ser recebido pelo forEach. 
// Dentro do escopo da função, vai reproduzir no console, os nomes dos animais.
function exibirNomeAnimais(a) {
  console.log('Estou exibindo os nomes dos animais:', a.animal);
}

// O ForEach foi percorrendo cada um dos elemento da Array.
// Executa o código eassim fazendo exibir os nomes.
animais.forEach(exibirNomeAnimais);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');