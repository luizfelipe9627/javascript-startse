function trocarFundo() {
  // Está armazenando na const menu as cores de fundo presentes nas options.
  const menu = document.querySelector('#coresFundo');

  // Está pegando as opções do menu e a opção selecionada no HTML e armazenando o valor dela. na const cor
  const cor = menu.options[menu.selectedIndex].value;
  
  // Está selecionando o body e falando para pegar o estilo background dele é mudar para o valor armazenado na const cor.
  document.body.style.background = cor;
}

