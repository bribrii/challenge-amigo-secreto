//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == ' ') {
        alert('Por favor, digite um nome válido para o sorteio!');
    } else {
        amigos.push(nome);
        console.log(amigos);
    }
    limparCampo();
}













function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}