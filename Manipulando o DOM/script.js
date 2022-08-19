console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

/*
  O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. 
  O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.
*/

// Está puxando os UL do HTML.
let lista = document.querySelector('ul');

// Está mostrando no console os filhos do UL.
console.log('Estou exibindo todos os filhos de UL', lista);


  // Uma variável que é responsável por criar um novo elemento.
  let elementoLi = document.createElement('li');

  // Está criando um novo elemento LI.
  elementoLi.textContent = 'Um novo item na lista';

  // Para fazer ele aparecer na lista tem que transformar ele no filho do UL. 
  // Para isso usamos o appendChild tendo como parâmetro o elemento filho e no inicio o elemento pai.
  lista.appendChild(elementoLi);

  // Irá apresentar no console as LI com a adicionada.
  console.log('Estou exibindo uma nova LI:', lista);


// Usado para remover todos os itens de lista.
// lista.remove();

// O querySelectorAll serve para selecionar todos os elementos.
// Nesse caso estamos selecionando todos os LI dentro de lista.
let filhosDaLista = lista.querySelectorAll('li');

// O For está percorrendo todo o vetor do filhosDaLista.
// O primeiro parâmetro filho é um nome atribuído, que pode ser mudado no for mesmo.
/*
for(filho of filhosDaLista) {
  // O filho está pegando um item por vez do filhosLista depois mandado para o removeChild.
  lista.removeChild(filho);
}
*/

// O className serve para adicionar uma classe a algum elemento.
// Nesse caso estamos adicionando no UL.
// lista.className = 'novoPonteiro';

// Existe também outra forma de adicionar uma classe a um elemento.
// O setAttribute trabalha com dois parâmetros, o primeiro o que será adicionada e no segundo o nome da class/id.
lista.setAttribute('class', 'novoPonteiro');

// Agora para remover podemos utilizar o removeAttribute, que só recebe 1 parâmetro que é o que ele vai remover.
// lista.removeAttribute('class');

// Está alterando o estilo da cor de texto do UL.
lista.style.color = '#180';

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

// Está puxando do HTML todos os button presentes.
let botao = document.querySelector('button');

// O addEventListener serve para adicionar um manipulador de evento a algo, geralmente trabalha com dois parâmetros, qual tipo de evento vai ser e a função que vai ser executada.
// Nesse caso iremos usar um evento de clique, ao clicar acontece algo.
// A função nesse caso esta sendo criada e já vai ser chamada no escopo.
botao.addEventListener('click', function() {
  // O botão também irá sumir pois ele está dentro do UL.
  lista.remove();
});



