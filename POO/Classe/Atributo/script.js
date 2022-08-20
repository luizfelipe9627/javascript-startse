// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Financiamento.
class Financiamento {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  valorFinanciamento;
  taxaJuros;
  // Foi declarado um atributo tendo um valor inicial fixo. Para ele fazer parte do construtor teria que definir ele no parâmetro do construtor e em seguida tornar ele um atributo dentro do construtor usando o THIS.
  // O CONSTRUCTOR sempre reescreve seus valores, então o valor inicial definido fora dele vai ser ignorado por ele.
  numero = 0;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(valorFinanciamento, taxaJuros) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.valorFinanciamento = valorFinanciamento;
    this.taxaJuros = taxaJuros;
    // Ao invés de receber o taxaJuros podemos definir um valor fixo. Não é recomendado pois o construtor sempre reescreve o valor então ele não vai poder ser alterado.
    // this.taxaJuros = 10;
  }
}

// Uma variável chamada Financiamento que está armazenando um NEW que é responsável por fazer declaração de objetos.
// Caso não coloque nenhum parâmetro no NEW ele vai criar o objeto Financiamento mas vai resultar UNDEFINED nos atributos.
let valores = new Financiamento(10000, 10);

console.log(valores)