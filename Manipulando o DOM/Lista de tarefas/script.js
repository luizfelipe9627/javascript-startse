// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Está pegando o elemento LI que vai ser responsável pela lista de tarefas.
let listaTarefas = document.querySelector('#listaTarefas');

// Está pegando o elemento INPUT de tarefas.
let caixaTexto = document.querySelector('#caixaDeTexto');

// Está pegando o elemento BUTTON de adicionar tarefas.
let botaoAdicionar = document.querySelector('#botaoAdicionar');

// Está pegando o elemento SELECT..
let listaSuspensa = document.querySelector('#listaSuspensa');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// O addEventListener serve para adicionar um manipulador de evento a algo, geralmente trabalha com dois parâmetros, qual tipo de evento vai ser e a função que vai ser executada.
// Nesse caso iremos usar um evento de clique, ao clicar acontece algo.
// A função nesse caso esta sendo criada e já vai ser chamada no escopo.
botaoAdicionar.addEventListener('click', function() {

  // Está falando que se o valor do caixaTexto for igual a nada escrito ele vai executar uma ação.
  if(caixaTexto.value == '') {
    // Irá exibir um alerta de janela caso não digite nada no caixaTexto.
    alert('O campo de texto não pode ficar em branco.');

    // Em seguida irá focar o input do caixaTexto.
    caixaTexto.focus()

    // Está encerrando a continuação de execução desse bloco de comandos.
    return;
  } 

  // Está armazenando no textoDaTarefa o valor(o que foi digitado) do caixaTexto.
  let textoDaTarefa = caixaTexto.value;

  // Quando pegar o valor do caixaTexto o input vai ficar em branco novamente.
  caixaTexto.value = '';

  // Está criando o filho da listaTarefas(pai) que chama a função adicionarTarefa e seu parâmetro.
  listaTarefas.appendChild(adicionarTarefa(textoDaTarefa));

  // Responsável por exibir a listaSuspensa quando clicado no botão "+". 
  // Vai executar a função.
  exibeOcultaListaSuspensa();

  // Ao clicar no botão ele vai focar no input.
  caixaTexto.focus();
});

function adicionarTarefa(textoDaTarefa) {
  // Irá criar um elemento LI que vai ser responsável por fazer os itens da lista.
  let elementoLI = document.createElement('li');

  // Irá criar um elemento SPAN, que vai ficar responsável pela area de texto digitado pelo o usuário.
  let elementoSPAN = document.createElement('span');

  // Ao o SPAN ser criado ele vai receber um ID que vai ser nomeado como tarefa.
  elementoSPAN.setAttribute('id', 'tarefa');

  // Todo LI criado vai ser criado com o padrão que é naoRealizado, ao clicar ele vai ficar realizado.
  elementoLI.className = 'naoRealizada';

  // Quando a função for chamada então ele irá um texto, que foi o que usuário digitou no input.
  elementoSPAN.textContent = textoDaTarefa;

  // Para fazer ele aparecer na lista tem que transformar ele no filho do elementoLi. 
  // Sendo o pai o elementoLI e o filho o elementoSPAN.
  elementoLI.appendChild(elementoSPAN);

  // Está adicionando o button de remover a lista chamando sua função quando for clicado pela primeira vez no botão de "+".
  elementoLI.appendChild(adicionarBotaoRemover());

  // Está adicionando um evento ao clicar no elementoSPAN(texto que o usuário digitou).
  elementoSPAN.addEventListener('click', function() {
    // Se o elemento clicado(SPAN) for com o ID exatamente igual a tarefa ele irá executar uma ação.
    if(this.id === 'tarefa') {
      // Se o pai desse elemento tiver a Class exatamente igual a naoRealizada ele vai executar uma ação.
      if(this.parentNode.className === 'naoRealizada') {
        // Iŕa mudar o pai deste elemento para a Class realizada.
        this.parentNode.className = 'realizada'
      } else {
        // Caso a Class seja realizada ira mudar o pai deste elemento para a Class naoRealizada novamente.
        this.parentNode.className = 'naoRealizada';
      }
    };
  });

  // Está finalizando a execução do bloco de comandos e retornando para o elementoLI.
  return elementoLI;
}


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function adicionarBotaoRemover() {
  // Está criando um elemento do tipo button e armazenando no botaoRemover.
  let botaoRemover = document.createElement('button');
  
  // Está adicionando um texto ao button.
  botaoRemover.textContent = '✖';

  // Está adicionando uma Class chamada remover no botaoRemover.
  botaoRemover.classList = 'remover';

  // Está adicionando um evento ao clicar no botão de remover(X).
  botaoRemover.addEventListener('click', function() {
    // Está falando para remover o filho do LI que no caso vai ser o button.
    // o THIS é literalmente o button e o parenteNode é para identificar quem é o pai dele, que no caso é o LI.
    listaTarefas.removeChild(this.parentNode);

    // Será responsável por colocar o atributo hidden na lista suspensa pois ela já esta sendo mostrada.
    exibeOcultaListaSuspensa();
  });

  // Está finalizando a execução do bloco de comandos e retornando para o botaoRemover.
  return botaoRemover;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function exibeOcultaListaSuspensa() {
  // Está pegando o elemento SPAN que é o que o usuário digitou e armazenando na variável tarefa.
  let elementoSPAN = document.querySelector('#tarefa');

  // Se elementoSPAN não encontrar nenhuma ID ele vai seguir com a condição.
  if(elementoSPAN === null) {
    // Está setando pela segundo vez um atributo hidden para a listaSuspensa.
    listaSuspensa.setAttribute('hidden', 'hidden');
  } else {
    // Se não ele vai remover o atributo hidden.
    listaSuspensa.removeAttribute('hidden');
  }
}

// Em vez de usarmos o parâmetro de Click usamos o parâmetro Change que é para quando houver uma mudança no elemento.
listaSuspensa.addEventListener('change', function() {
  // Se alguma opção da lista for mudada/selecionada para a opção 1 ou 2 vai executar o bloco de comandos.
  if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
    // Está armazenando a lista de tarefas que o usuário digitou, no caso o SPAN com o ID tarefa.
    let vetorTarefas = listaTarefas.querySelectorAll('#tarefa');

    // Irá pegar cada elemento tarefa e em seguida executar uma ação.
    for(tarefa of vetorTarefas) {
      // Cria um evento como se fosse de click, mesmo sem ninguém ter clicado, então irá marcar e desmarcar todas ao selecionar a opção do select.
      tarefa.dispatchEvent(new Event('click'));
    }
  } else if(listaSuspensa.selectedIndex === 3) {
    // Está armazenando os botões de remover, no caso o "X".
    let vetorBotoes = listaTarefas.querySelectorAll('.remover');

    // Irá pegar cada elemento botao de vetorBotoes e em seguida executar uma ação.
    for(botao of vetorBotoes) {
      // Cria um evento como se fosse de click, mesmo sem ninguém ter clicado, então vai remover tudo ao selecionar a opção do select 3.
      botao.dispatchEvent(new Event('click'));
    }
  }
});


