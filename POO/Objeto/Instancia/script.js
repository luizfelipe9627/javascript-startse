// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict'

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  codigo;
  titulo;
  
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(codigo, titulo) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.codigo = codigo;
    this.titulo = titulo;
  }
}

// Foi criado uma variável chamada P1 que está recebendo um novo valor de atributo de parâmetros da CLASS Produto.
let p1 = new Produto(321, 'Cadeira')

// Irá apresentar no console os objetos da CLASS Produto.
console.log(p1);

// Podemos também filtrar e fazer aparecer somente algo em especifico.
console.log(p1.codigo);

// Foi declarado uma CLASS chamada Disciplina.
class Disciplina {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  codigo;
  nome;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(codigo, nome) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.codigo = codigo;
    this.nome = nome;
  }
}

// Foi criado uma variável chamada D1 que está recebendo um novo valor de atributo de parâmetros  da CLASS Disciplina.
let d1 = new Disciplina(123, 'Matemática');

// Irá apresentar no console o objeto D1 que recebe os novos valores de atributos da CLASS Disciplina.
console.log(d1);

// Podemos fazer o mesmo processo para atribuir novos valores aos atributos da CLASS Disciplina.
let d2 = new Disciplina(456, 'Algebra');
console.log(d2);