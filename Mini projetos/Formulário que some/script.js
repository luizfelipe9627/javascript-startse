function bemVindo() {
  // Usado para pegar o valor de uma propriedade, como por exemplo texto digitado pelo o usuário.
  const usuario = document.querySelector('#usuario').value;

  // Vai pegar o usuário e reproduzir o dado no alert.
  alert(`Ola ${usuario}, seja bem vindo.`);
  
  // Em seguida ele faz o formulário sumir.
  document.getElementById('formulario').style.display = 'none'
} 