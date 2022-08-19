console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  O Else serve basicamente para suprir a parte negativa da condição do IF, ou seja, quando a condição no IF for falsa, o ELSE assume e executa a ação.
*/

// Criado duas variáveis do tipo number.
let nota1 = 8, nota2 = 5;

// Função media declarada, tendo dois parâmetros, N1 e N2 que vai ser definida pelo media do resultado.
// Em seguida 
function media(n1, n2) {
  return (n1 + n2) / 2;
}

// Está atribuindo os valores aos parâmetros da função media.
let resultado = media(nota1, nota2);

// Irá mostrar no console o resultado.
console.log(`${nota1 + nota2} / 2 é igual a:`, resultado);

// Esta falando que SE o valor de resultado for Menor ou Igual(>=) ele vai seguir o bloco de comando atribuído dentro do IF, pois deu verdadeiro.
if (resultado >= 6) {
  console.log('Aprovado com a média:', resultado);
} 
// Podemos criar também um ELSE seguido de um IF, que vai funcionar da mesma maneira só que apenas se o IF anterior for false. Se o IF for verdadeiro ele vai seguir o bloco de comandos. Caso não for ele vai continuar para o próximo que no caso é o ELSE.
else if (resultado >= 4) {
  console.log('Em recuperação com a média:', resultado);
}
// Já o else fala que SENÃO, no caso se nenhum dos blocos anteriores forem verdadeiro ele vai executar o bloco de comandos.
else {
  console.log('Reprovado com a média:', resultado)
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// SE a nota1 for igual a 0(mesmo tipo) OU(qualquer uma das duas devem ser verdadeiras) SE a nota2 for igual a 0(também mesmo tipo), então ele irá executar o bloco de comandos dentro do IF.
if (nota1 === 0 || nota2 === 0) {
  console.log('Infelizmente você foi desclassificado pois tirou 0.')
} 
// Caso contrario ele irá pular para o ELSE.
else {
  console.log('Parabéns, você foi classificado!')
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Nesse caso SE nota 1 for maior que 7 E(as duas tem que ser verdadeiro) nota2 for maior que 7, ele irá executar o bloco de comandos do IF.
if(nota1 > 7 && nota2 > 7) {
  console.log('Você teve um excelente desempenho.');
} 
// Caso o bloco anterior tenha sido false ele irá executar o else.
else {
  console.log('Você teve um desempenho razoável.');
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');