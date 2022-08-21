// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi feita a declaração de uma classe chamada Filme.
class Filme {
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  // Está recebendo dois parâmetros chamados titulo e ano.
  constructor(titulo, ano) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o parâmetro da CLASS, sendo que o que vem depois do THIS é um atributo.
    this.titulo = titulo;
    this.ano = ano;
  }
}

// Foi criado uma variável chamada meuFilme que está definindo um novo valor de atributo parâmetros da CLASS Filme.
let meuFilme = new Filme('Aprendendo JavaScript', 2022);

// Irá apresentar no console os objetos da CLASS filme.
console.log(meuFilme);

// Foi feita a declaração de uma classe chamada Produto.
class Produto {
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  // Não foi definido nenhum parâmetro para ele.
  constructor() {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o parâmetro da CLASS, sendo que o que vem depois do THIS é um atributo.
    this.tipo = 'Produto X';
  };
}

// Como a CLASS produto não tem nenhum parâmetro não é possível alterar o seu escopo.
// Mas mesmo assim ele executa o construtor.
let prod = new Produto();

// Irá apresentar no console o o objeto dentro do CONSTRUCTOR.
console.log(prod);

