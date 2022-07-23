// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Está pegando o elemento LI que vai ser responsável pela lista de tarefas.
let listaTarefas = document.querySelector('#listaTarefas');

// Está pegando o INPUT de tarefas.
let caixaTexto = document.querySelector('#caixaDeTexto');

// Está pegando o BUTTON de adicionar tarefas.
let botaoAdicionar = document.querySelector('#botaoAdicionar');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// O addEventListener serve para adicionar um manipulador de evento a algo, geralmente trabalha com dois parâmetros, qual tipo de evento vai ser e a função que vai ser executada.
// Nesse caso iremos usar um evento de clique, ao clicar acontece algo.
// A função nesse caso esta sendo criada e já vai ser chamada no escopo.
botaoAdicionar.addEventListener('click', function() {
  
  // Está armazenando no textoDaTarefa o valor(o que foi digitado) do caixaTexto.
  let textoDaTarefa = caixaTexto.value;

  // Quando pegar o valor do caixaTexto o input vai ficar em branco novamente.
  caixaTexto.value = '';

  // Está criando o filho da listaTarefas(pai) que se chama adicionarTarefa(filho e função) e passando o textoDaTarefa que foi o que usuário digitou.
  listaTarefas.appendChild(adicionarTarefa(textoDaTarefa));

  // Ao clicar no botão ele vai focar no input.
  caixaTexto.focus()
});

// Função declarada.
function adicionarTarefa(textoDaTarefa) {
  // Irá criar um elemento LI.
  let elementoLI = document.createElement('li');

  // Irá criar um elemento SPAN.
  let elementoSPAN = document.createElement('span');

  // Ao ser criado o SPAN vai receber um ID que vai ser nomeado como tarefa.
  elementoSPAN.setAttribute('id', 'tarefa');

  // Quando a função for chamada então ele irá um texto, que foi o que usuário digitou no input.
  elementoSPAN.textContent = textoDaTarefa;

  // Para fazer ele aparecer na lista tem que transformar ele no filho do elementoLi. 
  // Sendo o pai o elementoLI e o filho o elementoSPAN.
  elementoLI.appendChild(elementoSPAN)

  // Está adicionando o button de remover a lista chamando sua função quando for clicado pela primeira vez no botão de "+".
  elementoLI.appendChild(adicionarBotaoRemover());

  // Está retornando para que a função pode ser chamada no botaoAdicionar.
  return elementoLI;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function adicionarBotaoRemover() {
  // Está criando um elemento do tipo button e armazenando no botaoRemover.
  let botaoRemover = document.createElement('button');
  
  // Está adicionando um texto ao button.
  botaoRemover.textContent = '✖';

  // Está adicionando uma classe no botaoRemover.
  botaoRemover.classList = 'remover';

  // Está adicionando um evento ao clicar no botão de remover.
  botaoRemover.addEventListener('click', function() {
    // Está falando para remover o filho(LI) do listaTarefas(UL).
    // o THIS é o button e o parenteNode é para identificar quem é o pai dele, que no caso é o LI.
    listaTarefas.removeChild(this.parentNode);
  });

  return botaoRemover;
}

