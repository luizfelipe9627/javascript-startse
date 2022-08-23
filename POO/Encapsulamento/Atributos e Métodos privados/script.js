// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem permitem trabalhar com instancias ou atributos e não permitem alterações.
  #tipo;
  #valor

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(tipo, valor) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#validaValor(valor);
    this.#tipo = tipo;
    this.#valor = valor;
  }

  // Declarado um método privado.
  // O método privado não pode ser acessado fora da CLASS.
  #validaValor(valor) {
    // Se o tipo do atributo valor for diferente do tipo number ele vai retornar valor inválido.
    if(typeof(valor) !== 'number') {
      console.log('Valor inválido!')
    } else {
      console.log('Valor correto!')
    }
  }
  // Declarado um método publico.
  // O método publico pode ser acessado fora da CLASS.
  getdados() {
    // Irá retornar o tipo e o valor.
    return `Tipo: ${this.#tipo}, Valor: ${this.#valor}`
  }
}

// Foi criado uma variável prod, que recebe os valores dos atributos da CLASS Produto.
let prod = new Produto('Mesa gamer', 400);

// Como é um atributo privado ele não pode ser acessado, então irá retornar UNDEFINED.
console.log(prod.tipo);

// Como os atributos privados estão dentro de um método público então eles podem ser acessados através desse método.
console.log(prod.getdados())

// Um método privado não pode ser chamado, irá apresentar um erro no console.
// console.log(prod.validaValor())


// Foi declarado uma CLASS chamada Produto que tem a CLASS Livro como sua subclasse/filho.
class Livro extends Produto {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem permitem trabalhar com instancias ou atributos e não permitem alterações.
  #titulo;
  #numPag;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(titulo, numPag, valor) {
    // O SUPER é usado para definir os atributos ao objeto da CLASS pai, no caso Produto. Caso deixe vazio irá ficar como UNDEFINED ao reproduzir no console.
    super('Livro', valor);

    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#titulo = titulo;
    this.#numPag = numPag;
  }
}

// Está atribuindo no liv um novo atributo do objeto dentro CLASS Livro(filho) e CLASS Produto(pai). 
let liv = new Livro('Meu livro', 121, 24);

// Irá mostrar os atributos do objeto liv.
console.log(liv);

// Mesmo trabalhando com herança, um método privado não pode ser acessado.
// console.log(liv.validaValor());

// Mas se for público podemos acessar um método da CLASS Produto.
// o getDados pegou o tipo e o valor que está armazenado na CLASS Produto.
console.log(liv.getdados());