// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Disciplina.
class Disciplina {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  codigo;
  nome;
  nota;
  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(codigo, nome, nota) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.codigo = codigo;
    this.nome = nome;
    this.nota = nota;
  }
}

// Foi criado uma variável chamada D1 que está recebendo um novo valor de atributo de parâmetros  da CLASS Disciplina.
let d1 = new Disciplina(123, 'Matemática', 8);

// Irá apresentar no console o objeto D1 que recebe os novos valores de atributos da CLASS Disciplina.
console.log(d1);

// Foi criado uma variável chamada D2 que está recebendo as referencias do objeto D1.
let d2 = d1;

// Podemos perceber que o D2 está exatamente igual ao D1.
console.log(d2);

// Quando alteramos o D2 ele também altera o D1, pois eles ocupam o mesmo espaço de memoria, então caso eu alterasse o D1 ele também alteraria o D2.
d2.codigo = 456;
d2.nome = 'Algebra';
d2.nota = 7;

// Irá mostrar no console os novos valores de atribuição do D2 e também do D1 por conta de ocuparem o mesmo espaço de memoria.
console.log(d1);
console.log(d2);