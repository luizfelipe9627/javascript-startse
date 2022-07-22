console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  O switch case é uma estrutura condicional do Javascript como o if, e serve para analisar os valores e executar um bloco de código condicionalmente. 
  Normalmente é utilizado, quando se deseja analisar diversos valores diferentes para a mesma variável.
*/

// O valor atribuído na variável correio vai ser influenciado na opção do Switch case.
let tempoEntrega = 2;

// Basicamente o Switch case é uma estrutura de opção, dentro do seu parâmetro coloca a variável que vai receber o valor da opção.
// Então conforme o valor que tiver na opção ele seleciona um caso e executa ele.
// O Break é uma interrupção, importante para não executar os outros casos.
switch (tempoEntrega) {
  case 1:
    console.log('Entrega do tipo econômica em até 10 dias úteis.');
  break;

  case 2:
    console.log('Entrega do tipo normal em até 5 dias úteis.');
  break;

  case 3:
    console.log('Entrega do tipo expressa em até 2 dias úteis.');
  break;

  // Caso nenhuma das opções forem selecionadas, então ele irá parar no DEFAULT.
  default:
    console.log('Opção de entrega inválida.')
  break;
}

// Podemos também usar uma string.
tempoEntrega = 'economica';

// Ao invés de colocar números nos casos colocamos strings, então conforme o que for digitado no tempoEntrega ele irá retornar alguma opção.
switch (tempoEntrega) {
  case 'economica':
    console.log('Entrega do tipo econômica em até 10 dias úteis.');
  break;

  case 'normal':
    console.log('Entrega do tipo normal em até 5 dias úteis.');
  break;

  case 'expressa':
    console.log('Entrega do tipo expressa em até 2 dias úteis.');
  break;

  // Caso nenhuma das opções forem selecionadas, então ele irá parar no DEFAULT.
  default:
    console.log('Opção de entrega inválida.')
  break;
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');