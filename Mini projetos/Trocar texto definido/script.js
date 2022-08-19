// Está alterando o texto a partir da tag H1.
// Por conta de ser uma tag não precisa acrescentar caractere de id/class nele.
document.querySelector('h1').textContent = 'Mudado com JavaScript';

// Está alterando o texto a partir da da class subtitulo.
// Também pode ser usado o getElementsByClassName depois do document e deixar apenas texto dentro dele.
document.querySelector('.subtitulo').textContent = 'Outro elemento mudado com JavaScript';

// Está alterando o texto a partir do id paragrafo.
// Também pode ser usado o getElementById depois do document e deixar apenas texto dentro dele.
document.querySelector('#paragrafo').textContent = 'Olá, eu sou um paragrafo que foi mudado com JavaScript.';

