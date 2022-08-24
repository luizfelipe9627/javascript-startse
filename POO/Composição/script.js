// Ao utilizar o USE STRICT não é possível criar elementos sem usar uma variável. Foi definido um modo estrito global.
'use strict';

// A classe CupomDesconto é responsável por estabelecer os valores de cupons de desconto para clientes de acordo com o nível de gastos.
class CupomDesconto {
  // Está armazenando os atributos privados e seus valores que vão ser usados.
	#desconto1 = 10;
	#desconto2 = 20;

	constructor() { }
  // O get está sendo responsável por obter os dados dos gastos.
  getDesconto(gastos) {
    // Se gastos for maior ou igual a mil e gastos for menor ou igual a 3000 irá reproduzir o bloco de comandos. 
    if(gastos >= 1000 && gastos <= 3000) {
      // Irá apresentar o resultado no console.
      console.log(`Vocẽ tem direito a ${this.#desconto1}% de descontos!`);
    } 
    // Se não se gastos for maior que 3 mil irá reproduzir o bloco de comandos.
    else if(gastos > 3000) {
      // Irá apresentar o resultado no console.
      console.log(`Vocẽ tem direito a ${this.#desconto2}% de descontos!`);
    } 
    // Se não, ele irá reproduzir o bloco de comandos.
    else {
      // Irá apresentar o resultado no console.
      console.log(`Infelizmente, você não tem descontos no momento!`);
    }
  }
}

// Foi declarado uma CLASS chamada de Cliente.
class Cliente {
  // Está armazenando os atributos privados e seus valores que vão ser usados.
	#nome;
	#gastosAcumulados = 0;
	#cupom;

  // O CONSTRUCTOR é um método especial para criar e inicializar um objeto criado a partir de uma classe.
	constructor(nome) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
		this.#nome = nome;
    // Neste caso está atribuindo ao atributo uma nova instancia a CLASS CupomDesconto.
		this.#cupom = new CupomDesconto();
	}

  // Foi definido um método get que está sendo responsável por obter os dados dos desconto.
	getBeneficios() {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
		// Está atribuindo o atributo privado cupom a partir do método getDesconto atribuindo nele o valor presente dentro do atributo privado gastosAcumulados
		this.#cupom.getDesconto(this.#gastosAcumulados);	
	}

  // Foi definido um método set que está sendo responsável por alterar/atribuir os valores do atributo gastosAcumulados somando eles.
	setGastos(valor) {
    // O THIS está sendo usado para diferenciar um atributo de um parâmetro. E assim declarando o atributo da CLASS. O que vem depois do THIS é um atributo.
    // Está pegando o atributo gastosAcumulados e armazenando e somando ao valor.
		this.#gastosAcumulados += valor;
	}
}

// Está instanciando um novo valor ao atributo privado nome da CLASS Cliente.
let clienteNovo = new Cliente('Maria');

// Está invocando o método setGastos e pegando o objeto clienteNovo e atribuindo um valor de gastos.
clienteNovo.setGastos(500);

// Caso seja definido um novo valor ao setGastos acaba ocorrendo um acumulo de valores.
clienteNovo.setGastos(500);

// Está convocando o método getBeneficios e verificando se o objeto clienteNovo satisfaz a condição determinada.
clienteNovo.getBeneficios();

// Está apresentando os atributos privados e seus valores no console.
console.log(clienteNovo);