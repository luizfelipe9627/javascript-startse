/*
  Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
  Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
  Todo o objeto é caracterizado pelo simbolo: "{}.
*/

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Foi criado um objeto chamada livro, definida com dois dados diferentes.
const livro = {
  titulo: 'Introdução ao JavaScript',
  numPag: 500,
};

// Está alterando o dado numPag do objeto .
livro.numPag = 250;

// Pode ser usado para acessar um dado em especifico dentro do objeto.
console.log(livro.titulo);

// Também é possível criar mais dados mesmo fora do escopo do objeto.
livro.editora = 'Super Press';

// É responsável por mostrar todos os dados dentro do objeto livro.
console.log(livro);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const pessoa = {
  primeiroNome: 'Gabriel',
  ultimoNome: 'Lima',
  // Foi criado uma lista dentro do dado endereço.
  endereco: {
    rua: 'Estrada Vieiras',
    n: 123,
    bairro: 'Jardim Recanto do Sol',
    cidade: 'São Paulo',
    sigla: 'SP',
  },
  // Dentro de um objeto pode ser criado uma função local.
  // O this é muito utilizado em objetos, significa literalmente 'Este', é usado para se retratar de uma propriedade em especifico.
  nomeCompleto: function() {
    return this.primeiroNome + ' ' + this.ultimoNome;
  }
};

// Está criando uma nova propriedade no objeto pessoa.
pessoa.celular = 11952353749;

// Criado uma função global usando um objeto.
pessoa.enderecoCompleto = function() {
  return `Rua: ${pessoa.endereco.rua} ${pessoa.endereco.n} - ${pessoa.endereco.bairro}`;
}

// Uma função declarada trabalhando com objeto.
// O parâmetro P vai armazenar os dados das funções.
function exibeDadosPessoa(p) {
  alert(`\n
    Nome: ${p.nomeCompleto()}\n
    Endereco: ${p.enderecoCompleto()}
    Celular: ${p.celular}
  `);
}

// Está invocando a função exibeDadosPessoa puxando as informações do objeto pessoa.
exibeDadosPessoa(pessoa);

// Irá mostrar todos as propriedades do objeto pessoa.
console.log(pessoa);

// Usado para mostrar alguma propriedade dentro de uma lista.
console.log(pessoa.endereco.bairro);

// Está exibindo e executando a função nomeCompleto criado dentro de um objeto.
console.log(pessoa.nomeCompleto());

// Está exibindo e executando a função enderecoCompleto criado dentro de um objeto.
console.log(pessoa.enderecoCompleto());

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');