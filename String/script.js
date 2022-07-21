/*
  Por definição, strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. 
  Em Javascript, uma string sempre estará entre aspas composta("") ou simples('') o resultado irá dar o mesmo.
*/

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// É uma string pois esta entre aspas.
let nome = 'Giovanni';
let idade = 17;

// Está reescrevendo o valor guardado na variável nome.
nome = 'Marcela';
console.log(nome);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Podemos concatenar dois tipos de dados.
let infosPessoa = nome + ', ' + idade + ' anos';
console.log(infosPessoa);

// Ou de um jeito mais simples e limpo usamos crase.
infosPessoa = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(infosPessoa);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// O length é usado para contar quantas caracteres existe.
console.log(`Eu vou contar a quantidade de letras/caracteres:`, nome.length);

// O método toUpperCase() é método usado para converter todo os caracteres para letras maiúsculas.
console.log(`Eu vou transformar tudo em letra maiúscula:`, nome.toUpperCase());

// O método toLowerCase() é usado para converter todo os caracteres para letras minusculas.
console.log(`Eu vou transformar tudo em letra minuscula:`, nome.toLowerCase());

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let localizacao = 'São Paulo - SP';

// O substring é usado para selecionar um ponto da string até outro ponto, assim selecionando apenas o desejado.
// let estado = localizacao.substring(12);

// Ou poderia ter feito da seguinte maneira.
// Basicamente está selecionando a variável localização e falando para começar duas posições anteriores do final, no caso a palavra SP.
let estado = localizacao.substring(localizacao.length-2);

// Irá mostrar a sigla do estado que está na posição 12 até em diante.
console.log(`Extraindo a posição 12 em diante eu obtive a palavra:`, estado);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let x = '3.5';
let y = '4.2';
let resultado = x + y;

// Podemos ver que mesmo sendo números eles estão entre aspas então viram string.
console.log(`Eu sou do tipo:`, typeof resultado);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const frase = 'Minha cor favorita é: Azul';

// O indexOf serve para contar quantas letras tem até o caractere definido nele.
const indice = frase.indexOf(':');
console.log('Eu estou contando quantas letras/caracteres tem depois do ":" :', indice);

// Já que o indice está armazendo o total de caractere até o caractere ":", adicionando uma substring selecionando o indice e pulando mais 2 de espaço extraímos a cor.
const cor = frase.substring('Eu estou selecionando a variável frase e pulando dois números armazenado no indice:', indice+2)
console.log(cor);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

let texto = 'Olá, mundo!';

// Mesmo que o replace tenha sido utilizado a variável texto ainda não perdeu seu valor.
console.log('Eu ainda não perdi meu valor:', texto);

// O replace é usado para substituir partes de uma frase. O primeiro parâmetro é o texto original e o segundo é o novo texto.
let novoTexto = texto.replace('mundo!', 'pessoal!');

console.log('Sou um novo texto mudado pelo replace:' ,novoTexto);

let anuncio = 'A festa ocorrerá no primeiro dia do primeiro mês';

// O replaceAll é usado para selecionar todas as frases que forem parecidas com o que foi escrito e mudar elas.
let novoAnuncio = anuncio.replaceAll('primeiro', 'segundo');
console.log('Sou um novo texto mudado pelo replaceAll:', novoAnuncio);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');