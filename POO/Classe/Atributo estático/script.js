// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // STATIC é usado para criar atributos estáticos que não podem ser alterados, muito parecidos com a const.
  static pequeno = 5;
  static medio = 10;
  static grande = 15;
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  codigo;
  titulo;
  valor;
  // Usado para armazenar o tamanho do atributo estático.
  tamanho;
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(codigo, titulo, valor, tamanho) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.codigo = codigo;
    this.titulo = titulo;
    this.valor = valor;
    this.tamanho = tamanho;
  }
}

// Foi criado uma variável chamada P1 que está recebendo um novo valor de atributo de parâmetros da CLASS Produto.
// Para acessar um atributo estático tem que ser chamado a CLASS pai e em seguida o seu atributo.
let p1 = new Produto(321, 'Cadeira', 'R$49,99', Produto.medio);
let p2 = new Produto(121, 'Almofada', 'R$19,99', Produto.pequeno);

// Irá apresentar no console os valores definidos no atributo da CLASS Produto.
console.log(p1);
console.log(p2);

// Foi declarado uma CLASS chamada Produto.
class Veiculo {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  tamanho;
  
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(tamanho) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.tamanho = tamanho;
  }
}

// Foi criado uma variável chamada V que está recebendo um novo valor de atributo de parâmetros da CLASS Produto e atribuindo na CLASS Veiculo.
// Para acessar um atributo estático tem que ser chamado a CLASS pai e em seguida o seu atributo.
let v = new Veiculo(Produto.grande);

// Irá apresentar no console os valores definidos no atributo da CLASS Veiculo.
console.log(v);