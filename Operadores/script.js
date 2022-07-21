/*
 Os operadores aritméticos executam operações matemáticas, como adição e subtração com operandos.

  Adição: (+)
  Subtração: (-)
  Multiplicação: (*)
  Divisão: (/)
  Módulo - resto da divisão: (%)
  Exponenciação- elevado ao quadrado: (**)
*/

console.log('=-=-=-=-=-OPERADORES ARITMÉTICOS-=-=-=-=-=');

// Exemplo com adição.
let som1 = 11, som2 = 2;
let somRes1 = som1 + som2;
console.log(`${som1} mais ${som2} é igual a:`, somRes1);
// Também pode ser usado para juntar strings.
let msg1 = 'Olá ' + 'Mundo! ' + 'Sou uma concatenação de strings.';
console.log(msg1)

// Exemplo com subtração.
let sub1 = 10, sub2 = 2;
let subRes1 = sub1 - sub2;
console.log(`${sub1} menos ${sub2} é igual a:`, subRes1);

// Exemplo com multiplicação.
let mul1 = 10, mul2 = 2;
let mulRes1 = mul1 * mul2;
console.log(`${mul1} multiplicado por ${mul2} é igual a:`, mulRes1);

// Exemplo com divisão.
let div1 = 10, div2 = 2;
let divRes1 = 10 / 2;
console.log(`${div1} dividido por ${div2} é igual a:`, divRes1);

// Exemplo com módulo.
let mod1 = 10, mod2 = 2;
let modRes1 = mod1 % mod2;
console.log(`O resto da divisão de ${mod1} dividido por ${mod2} é igual a:`, modRes1);

// Exemplo com exponenciação.
let exp1 = 10, exp2 = 2;
let expRes1 = exp1 ** exp2;
console.log(`${exp1} exponenciado por ${exp2} é igual a:`, expRes1);

/*
  Os operadores de atribuição retornam o valor do objeto especificado pelo operando esquerdo após a atribuição.

  Atribuição: (=)
  Adição: (+=)
  Subtração: (-=)
  Multiplicação: (*=)
  Divisão: (/=)
  Módulo - resto da divisão: (%=)
  Exponenciação - elevado ao quadrado: (**=)
*/

// Exemplo de atribuição.
let msg2 = 'Olá mundo! Sou uma atribuição.';
console.log(msg2);

// Exemplo de soma.
let som3 = 15, som4 = 2;
som3 += som4 // Mesma coisa que som3 = som3 + som4;
console.log('15 mais 2 é igual a:', som3);

// Exemplo de subtração.
let sub3 = 15, sub4 = 2;
sub3 -= sub4; // Mesma coisa que sub3 = som3 - sub4;
console.log('15 menos 2 é igual a:', sub3);

// Exemplo de multiplicação.
let mul3 = 15, mul4 = 2;
mul3 *= mul4; // Mesma coisa que mul3 = mul3 * mul4;
console.log('15 multiplicado por 2 é igual a:', mul3);

// Exemplo de divisão.
let div3 = 15, div4 = 2;
div3 /= div4; // Mesma coisa que div3 = div3 / div4;
console.log('15 dividido por 2 é igual a:', div3);

// Exemplo de módulo.
let mod3 = 15, mod4 = 2;
mod3 %= mod4; // Mesma coisa que mod3 = mod3 % mod4;
console.log('15 divido por 2 tem o resto é igual a:', mod3);

// Exemplo de exponenciação.
let exp3 = 15, exp4 = 2;
exp3 **= exp4; // Mesma coisa que exp3 = exp3 ** exp4.
console.log('15 exponenciado por 2 é igual a:', exp3);

console.log('=-=-=-=-=-OPERADORES RELACIONAIS-=-=-=-=-=');

/*
  Operadores relacionais são utilizados para comparar valores, o resultado de uma expressão relacional é um valor boolean (Verdadeiro ou Falso).

  Maior que: (>)
  Menor que: (<)
  Maior ou igual: (>=)
  Menor ou igual: (<=)
  Igual - não considera o tipo: (==)
  Igual - considera o tipo: (===)
  Diferente - não considera o tipo: (!=)
  Diferente - considera o tipo (!==)
*/

// Exemplo com o maior que.
let maiorQue1 = 7, maiorQue2 = 10;
let maiorQue = maiorQue1 > maiorQue2;
console.log(`${maiorQue1} não é maior que ${maiorQue2}, então o resultado é:`, maiorQue)

// Exemplo com o menor que.
let menorQue1 = 14, menorQue2 = 23;
let menorQue = menorQue1 < menorQue2;
console.log(`${menorQue1} é menor que ${menorQue2}, então o resultado é:`, menorQue)

// Exemplo com o maior ou igual.
let maiorIgual1 = 5, maiorIgual2 = 3;
let maiorIgual = maiorIgual1 <= maiorIgual2;
console.log(`${maiorIgual2} não é maior e nem igual ${maiorIgual1}, então o resultado é:`, maiorIgual)

// Exemplo com o menor ou igual.
let menorIgual1 = 18, menorIgual2 = 18;
let menorIgual = menorIgual1 <= menorIgual2;
console.log(`${menorIgual1} não é menor que ${menorIgual2} mas é igual, então o resultado é:`, menorIgual)

// Exemplo com o igual não considerando o tipo.
let igualSemTipo1 = 7, igualSemTipo2 = '7';
let igualSemTipo = igualSemTipo1 == igualSemTipo2;
console.log(`${igualSemTipo1} é igual a ${igualSemTipo2}, mas não são do mesmo tipo, então o resultado é:`, igualSemTipo)

// Exemplo com o igual considerando o tipo.
let igualComTipo1 = 10, igualComTipo2 = '10';
let igualComTipo = igualComTipo1 === igualComTipo2;
console.log(`${igualComTipo1} é igual a ${igualComTipo2}, mas não são do mesmo tipo, então o resultado é:`, igualComTipo)

// Exemplo com o diferente não considerando o tipo.
let diferenteSemTipo1 = 4, diferenteSemTipo2 = '5';
let diferenteSemTipo = diferenteSemTipo1 != diferenteSemTipo2
console.log(`O ${diferenteSemTipo1} é um number e o ${diferenteSemTipo2} é uma string, então o resultado é:`, diferenteSemTipo)

// Exemplo com o diferente considerando o tipo.
let diferenteComTipo1 = '12', diferenteComTipo2 = '12';
let diferenteComTipo = diferenteComTipo1 !== diferenteComTipo2;
console.log(`O ${diferenteComTipo1} é number e o ${diferenteComTipo2} também, então o resultado é:`, diferenteComTipo)

console.log('=-=-=-=-=-OPERADORES LÓGICOS-=-=-=-=-=');

/*
  Os operadores lógicos são utilizados para efetuarmos operações em condições lógicas. As operações lógicas são ensinadas em vários cursos de tecnologia de diferentes formas.

  Negação - NOT: (!)
  E - AND: (&&)
  Ou - OR: (||) 
*/

// Exemplo de Negação.
let negacao = true;
let invNegacao = !negacao;
console.log('A negação inverte o valor, então o resultado é:', invNegacao);

//Exemplo do E.
let e1 = 2, e2 = 4, e3 = 6;
let eRes = (e1 < e2) && (e3 > e2); 
console.log(`${e1} é menor que ${e2}? Não. E ${e3} é maior que ${e2}? Sim. As duas condições foram satisfeitas, então o resultado é:`, eRes);

// Exemplo do OU.

let ou1 = 2, ou2 = 4, ou3 = 6;
let ouRes = (ou3 < ou1) || (ou2 > ou1);
console.log(`${ou3} é menor que ${ou1}? Não. OU ${ou2} é maior que ${ou1}? Sim. Uma das condições foi satisfeita, então o resultado é:`, ouRes);

console.log('=-=-=-=-=-OPERADOR DE INCREMENTO-=-=-=-=-=');

/*
  O operador de incremento adiciona 1 ao operando.
*/

let inc = 10;
let incRes = ++inc; // Mesma coisa que incRes = inc + 1;
console.log(`Adicionando apenas um número terá como resultado:`, incRes);

console.log('=-=-=-=-=-OPERADOR DE DECREMENTO-=-=-=-=-=');

/*
  O operador de decremento subtrai 1 do operando.
*/

let dec = 10;
let decRes = --dec; // Mesma coisa que decRes = dec - 1;
console.log(`Subtraindo apenas um número terá como resultado:`, decRes);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
