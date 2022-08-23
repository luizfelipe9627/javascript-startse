// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

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
      console.log('Valor inválido!');
    } else {
      console.log('Valor correto!');
    }
  }

  // Declarado um método publico.
  // O método publico pode ser acessado fora da CLASS.
  getDados() {
    // Irá retornar o tipo e o valor.
    return `Tipo: ${this.#tipo}, R$ ${this.#valor}`;
  }
  // Utilizado no início do nome de um método para alterar ou atribuir um dado de um atributo privado.
  setValor(valor) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#valor = valor;
  }
}

// Está atribuindo valores nos atributos privados da CLASS Produto do objeto X.
// Como instanciamos a CLASS Livro, ele vai armazenar tudo na própria CLASS.
let x = new Produto('Genérico', 33);

// Irá apresentar os atributos do projeto X no console.
console.log(x);

// Para apresentar somente os valores dos atributos podemos invocar uma declaração já criada.
console.log(x.getDados());

// Está setando um novo valor ao valor do atributo da CLASS Produto.
x.setValor(123);

// Irá apresentar os atributos do projeto X no console.
console.log(x)

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

  // Declarado um método publico.
  // O método publico pode ser acessado fora da CLASS.
  getDados() {
    // Irá retornar o tipo e o valor.
    // Está puxando o método getDados de outra CLASS, por isso tem que usar o SUPER.
    return `
    ${super.getDados()}
    Titulo: ${this.#titulo}
    Numero de páginas: ${this.#numPag}`
  }
}

// Está atribuindo valores nos atributos privados da CLASS Livro do objeto X.
// Como instanciamos a CLASS Livro, ele vai armazenar tudo na própria CLASS.
let y = new Livro('Meu livro', 122, 33);

// Irá apresentar os atributos do projeto X no console.
console.log(y);

// Para apresentar somente os valores dos atributos podemos invocar uma declaração já criada.
console.log(y.getDados());

// Está setando um novo valor ao valor do atributo da CLASS Produto.
x.setValor(123);

// Irá apresentar os atributos do projeto X no console.
console.log(y)