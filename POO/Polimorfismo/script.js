// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  descricao;
  largura
  altura;
  profundidade;
  valor;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(descricao, largura, altura, profundidade, valor) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.descricao = descricao;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;
    this.valor = valor;
  }
  // Para declarar um método dentro de uma CLASS utilizamos o mesmo jeito que uma function normal, mas se a palavra reservada FUNCTION, pois é um método.
  volumeProduto() {
    // Irá retornar a multiplicação da largura, multiplicado pela altura e depois multiplicado pela profundidade.
    return this.largura * this.altura * this.profundidade;
  }
  // Método declarado chamado parcelaValor, tendo seu parâmetro chamado de parcelas. Quase o mesmo exemplo que a função anterior, a diferença é que esse tem parâmetro.
  parcelaValor(parcelas) {
    return this.valor / parcelas;
  }
}

// Foi criado uma variável chamada prod que está recebendo um novo valor de atributo de parâmetros da CLASS Produto.
let prod = new Produto('Mesa', 20, 13, 79, 100);

// Irá apresentar no console os valores definidos no atributo da CLASS Produto.
console.log(prod);

// Para invocarmos o método que está dentro de uma classe, temos que pegar o objeto e em seguida o método junto com os "()".
console.log(prod.volumeProduto());

// Invocado o método parcelaValor e tendo o valor 2 como seu parâmetro, que no caso é o número de parcelas.
console.log(prod.parcelaValor(2))

// Não tem como acessar o método diretamente pois ele é do escopo local da CLASS, então irá retornar um erro.
parcelaValor(4);