// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Laboratório.
class Laboratorio {
  // Lista de atributos privados que vão ser usados dentro do construtor.
  // Os atributos privados não podem permitem trabalhar com instancias ou atributos e não permitem alterações.
  #nome;
  #capacidade;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(nome, capacidade) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#nome = nome;
    this.#capacidade = capacidade;
  }

  // O GET é utilizado no inicio do nome de um método para obter um dado de um atributo privado.
  getNome(nome) {
    // Irá retornar o atributo privado nome.
    return this.#nome;
  }
  getCapacidade() {
    // Irá retornar o atributo privado capacidade.
    return this.#capacidade;
  }

  // Utilizado no início do nome de um método para alterar ou atribuir um dado de um atributo privado.
  setNome(nome) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#nome = nome;
  }
  setCapacidade(capacidade) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.#capacidade = capacidade;
  }
}

// Está atribuindo valores aos atributos da CLASS Laboratorio.
let lab = new Laboratorio('Informática', 45);

// Irá apresentar UNDEFINED no console pois o atributo não pode ser acessado dessa forma.
console.log(lab.nome);

// Está mostrando no console todas informações e atributos presentes na variável lab. 
// Podemos perceber que ele acrescentou o atributo X criado fora da CLASS.
console.log(lab)

// Está criando um valor de um atributo diretamente fora da CLASS.
lab.x = 'Computação';

// Irá mostrar o atributo nome no console.
console.log(lab.x);

// Está atribuindo valores aos atributos da CLASS Laboratorio.
let lab2 = new Laboratorio('Ciência', 78);

// Podemos perceber no console que o atributo X não aparece mais, pois já foi usado e atribuído  ao lab.
console.log(lab2)

// Para conseguir alterar um atributo privado temos que utilizar o set.
lab.setNome('Novo laboratório');
lab.setCapacidade(787);

// Para obter uma informação de um atributo privado sem alterar ela, usamos o get.
console.log(lab.getCapacidade());

// Irá mostrar todos os atributos do objeto lab.
console.log(lab);