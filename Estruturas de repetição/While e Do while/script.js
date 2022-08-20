console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
*/

// Array criada para usar de exemplo com o While.
let operacoes = [
  'Soma',
  'Subtração',
  'Multiplicação',
  'Divisão',
];

// Diferente dor For no While temos que declarar o inicializador antes.
i = 0;

// O while é parado quando o seu parâmetro for satisfeito, no caso, quando I for menor que a quantidade de itens na Array. Até chegar a 4 pois 4 não é menor que ele mesmo.
while(i < operacoes.length) {
  // Irá mostrar o índice dos itens da Array pegando 1 por 1.
  console.log(operacoes[i]);
  // Para não ocorrer o loop, temos que adicionar um contador.
  i++;
};

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  A declaração do... while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.
*/

// Diferente dor For no Do while temos que declarar o inicializador antes.
let j = 0;

// Primeiro o Do executa o bloco de comando pela primeira vez, depois ele vai para o While e então se a condição não for satisfeita ele repete começando pelo Do novamente, e assim em diante até J for maior que a quantidade de itens na Array operações.
do {
  // Irá mostrar o índice e a posição dos itens da Array pegando 1 por 1.
  console.log(`${j} - ${operacoes[j]}`)
  // Para não ocorrer o loop, temos que adicionar um contador.
  j++
} while(j < operacoes.length);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
