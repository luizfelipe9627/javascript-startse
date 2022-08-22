// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  tipo;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(tipo) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.tipo = tipo;
  }

  // Método criado.
  getDados() {
    // Irá retornar o atributo tipo.
    return `${this.tipo}`;
  }
}

// Foi declarado uma CLASS chamada Produto que tem a CLASS Livro como sua subclasse/filho.
class Livro extends Produto {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  titulo;
  numPag;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(tipo, titulo, numPag) {
    // Neste caso estamos utilizando o SUPER para acessar um atributo da sua classe mãe, que no caso é a CLASS Produto.
    super(tipo);

    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.titulo = titulo;
    this.numPag = numPag;

    // Podemos invocar um método de outra CLASS usando o SUPER antes do método.
    console.log(super.getDados());
  }
  // Está definindo um método que irá mostrar no console o tipo, titulo e numPag quando invocada.
  exibeDadosLivro() {
    console.log (`${this.getDados()}. ${this.titulo}. ${this.numPag}`);
  }
}

// Está atribuindo no prod um novo atributo do objeto dentro CLASS Produto. 
let liv = new Livro('Produto', 'Meu livro', 133);

// Está mostrando todos os atributos dos objetos.
console.log(liv);

// Está invocando o método exibeDadosLivro, fazendo aparecer no console.
liv.exibeDadosLivro();
