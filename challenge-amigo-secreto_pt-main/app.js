//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == ' ' || nome == '') {
        alert('Por favor, digite um nome válido para o sorteio!');
    } else {
        amigos.push(nome);
        console.log(amigos);
    }

    let inputName = document.getElementById('amigo');
    let amigo = inputName.value;
    //document.getElementById('listaAmigos').textContent = amigo;

    let listaAmigos = document.getElementById('listaAmigos');
    let novoAmigo = document.createElement('li');

    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);



    limparCampo();
}













function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}