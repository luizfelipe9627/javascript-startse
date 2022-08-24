// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Está declarando uma CLASS chamada Fruta.
// O EXPORT é usado para permitir a exportação de dados para outro arquivo.
export class Fruta {
	// Criado a lista de atributos privados que vão ser usados.
	#nome;
	#quantidade;

	// O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
	constructor(nome, quantidade) {
		// O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
		this.#nome = nome;
		this.#quantidade = quantidade;
	}
}