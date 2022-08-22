// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// Foi declarado uma CLASS chamada Produto.
class Produto {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
  descricao;
  largura
  altura;
  profundidade;
  valor;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(descricao, largura, altura, profundidade, valor) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    this.descricao = descricao;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;
    this.valor = valor;
  }
  // Foi declarado um método estático que não pode ser alterado. Definido tendo 3 parâmetros: largura, altura e profundidade.
  static calculaVolume(largura, altura, profundidade) {
    // Irá retornar a multiplicação da largura, multiplicado pela altura e depois multiplicado pela profundidade.
    return largura * altura * profundidade;
  }
  // Método declarado chamado parcelaValor, tendo seu parâmetro chamado de parcelas. Quase o mesmo exemplo que a função anterior, a diferença é que esse tem parâmetro.
  parcelaValor(parcelas) {
    return this.valor / parcelas;
  }
}

// Foi criado uma variável chamada prod que está recebendo um novo valor de atributo de parâmetros da CLASS Produto.
let prod = new Produto('Mesa', 20, 13, 79, 100);

// Irá apresentar no console os valores definidos no atributo da CLASS Produto.
console.log(prod);

// Irá mostrar no console o resultado da multiplicação dos parâmetros presentes na CLASS Produto e dentro do método estático calculaVolume.
// Métodos estáticos só podem ser acessados dentro da CLASS.
console.log(Produto.calculaVolume(16, 23, 7))



// Foi declarado uma CLASS chamada Musica.
class Musica {
  // Foi criado uma lista dos atributos que vão ser usados dentro do parâmetro do construtor.
  // Não se cria variáveis quando se trabalha com CLASS ou com atributos.
	#titulo;
	#duracao;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
	constructor(titulo, duracao) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
		this.#titulo = titulo;
		this.#duracao = duracao;
	}

  // Foi criado um método estático, que não pode ser alterado.
	static converteSegundosEmMinutos(duracao) {
		const min = Math.floor(duracao / 60)
		let seg = duracao % 60;
		if (seg < 10 && seg > 0) {
			seg = `0${duracao % 60}`;
		} else if (seg < 10) {
				seg = '00';
		}
		return `${min}:${seg}`;
	}

  // Método declarado chamado getDuracao, que retorna o valor do atributo duração.
	getDuracao() {
    // Podemos utilizar o método de uma outra classe dentro de uma classe.
    // Está atribuindo os valores do parâmetro do método calculaVolume presente dentro da CLASS Produto.
    console.log(Produto.calculaVolume(2, 3, 8))
		return this.#duracao;
	}
}

// Foi criado uma variável chamada musica1 que está recebendo um novo valor de atributo de parâmetros da CLASS Musica.
const musica1 = new Musica('Minha musica', 190)

// Irá dar erro, pois como é estático não pode ser puxado através do seu atributo.
// console.log(musica1.converteSegundosEmMinutos(musica1.getDuracao()));

// Irá mostrar o resultado da conversão no console.
console.log(Musica.converteSegundosEmMinutos(musica1.getDuracao()));

// Podemos também alterar o valor da duração sem precisar do atributo musica1 e do método getDuracao.
console.log(Musica.converteSegundosEmMinutos(120));




