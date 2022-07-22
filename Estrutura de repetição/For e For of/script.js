/*
  A instrução For cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
*/

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Array criada para usar no exemplo com o For.
let listaNumeros = [23,45,76,12,89];

/*
 O For trabalha com 3 parâmetros:

  O primeiro parâmetro é responsável pelo valor de inicialização. O I foi o nome atribuído e pode ser mudado para o nome que desejar.
  
  O segundo parâmetro é responsável por fazer uma verificação lógica. O I foi o nome atribuído e pode ser mudado para o nome que desejar.

  O terceiro parâmetro é o contador que pode ser menos ou mais. O I foi o nome atribuído e pode ser mudado para o nome que desejar.
*/

// O for vai verificar se listaNumeros é maior que 0 se for ele vai exibir no console o primeiro item do listaNumeros e então vai jogar um número a mais no I e então ele vai se repetindo até a condição for quebrada, no caso até acabar os itens da array.
for (let i = 0; i < listaNumeros.length; i++) { // O for é uma variável local.
  console.log('' ,listaNumeros[i]);
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Array criada para usar de exemplo com o For.
let operacoes = [
  'Soma',
  'Subtração',
  'Multiplicação',
  'Divisão',
];

// Função montarTexto declarada.
function montarTexto() {
  // Foi criado uma variável do tipo string vazia para ser preenchida mais para frente.
  let textoLista = '';

  // O For vai verificar se o inicializador é menor que a quantidade dos itens da Array operações(no caso são 4 itens), se for ele vai colocar no textoLista uma tag LI concatenando com o objeto da Array conforme seu índice, e assim aplica um número a mais(i++) no I(inicializador). Só vai para quando atingir o número 4, pois não tem como 4 ser menor que 4.
  for (i = 0; i < operacoes.length; i++) {
    // Está criando uma lista desordenada com os itens da Array operações.
    textoLista += '<li>' + operacoes[i] + '</li>';
  }

  // Está retornando o textoLista para que o o escopo seja acessado no innetHTML.
  return textoLista;
}

// O innerHTML adiciona uma estrutura internamente no HTML.
document.querySelector('#listaOperacoes').innerHTML = montarTexto();

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  A sintaxe do for...of é específica para coleções, ao invés de todos os objetos. Ela irá iterar desta maneira sobre os elementos de qualquer coleção que tiver uma propriedade
*/

function montarTexto() {
  // Foi criado uma variável do tipo string vazia para ser preenchida mais para frente.
  let textoLista = '';

  // Existe o For Of que é uma forma alternativa que também funciona. Criando uma variável dentro do parâmetro do for, que é definida como a operação DE(of) operações.
  // Então cada vez que a estrutura do For for repetida ou inicializada a variável operacao vai assumir 1 elemento da Array operações, até não restar mais nenhuma.
  for (let operacao of operacoes) {
    // Está criando uma lista desordenada com os itens da Array operações.
    textoLista += '<li>' + operacao + '</li>';
  }

  // Está retornando o textoLista para que o o escopo seja acessado no innerHTML.
  return textoLista;
}

document.querySelector('#listaOperacoes').innerHTML = montarTexto();

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Array com 3 objetos criados para usar com o For Of.
let jogadores = [
  {
    nome: 'Beto',
    posicao: 'Atacante',
  },
  {
    nome: 'Gil',
    posicao: 'Zagueiro',
  },
  {
    nome: 'Milton',
    posicao: 'Volante',
  },
];

// O For Of está pegando cada objeto da Array jogadores e introduzindo o item do objeto n console. Então ele volta tudo de novo e pega outro e assim em diante e so termina quando não houver mais nada para ele pegar.
for (let jogador of jogadores) {
  console.log(jogador.nome);
}
