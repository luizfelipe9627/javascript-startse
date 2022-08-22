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
  constructor(titulo, numPag) {
    // O SUPER é usado para definir os atributos ao objeto da CLASS pai, no caso Produto. 
    // O SUPER copia o construtor da CLASS pai.
    // Caso deixe vazio irá ficar como UNDEFINED ao reproduzir no console.
    super('Livro');

    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.titulo = titulo;
    this.numPag = numPag;
  }
}

// Está atribuindo no prod um novo atributo do objeto dentro CLASS Produto. 
let prod = new Produto('Produto Genérico');

// Irá aparecer no console os novos valores dos atributos do objeto prod.
console.log(prod);

// Irá aparecer no console somente o valor do atributo tipo.
console.log(prod.getDados());

// Está atribuindo no liv um novo atributo do objeto dentro CLASS Livro.
// Por conta do Livro ser uma subclasse por herança ele também se torna um objeto, sendo assim ele recebe os atributos da class Produto também.
let liv = new Livro('StartSe', 78);

// Irá aparecer no console os novos valores dos atributos do objeto liv.
console.log(liv);

// Podemos também usar um método de uma outra CLASS. Pois Livro se tornou uma subclasse/filho do Produto, então tem acesso a seu escopo.
console.log(liv.getDados());



