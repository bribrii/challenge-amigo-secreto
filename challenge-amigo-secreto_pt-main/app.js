let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();

    if (nome == ' ' || nome == '') {
        alert('Por favor, digite um nome válido para o sorteio!');
    } else {
        amigos.push(nome);
        console.log(amigos);

        let inputName = document.getElementById('amigo');
        let amigo = inputName.value;

        let listaAmigos = document.getElementById('listaAmigos');
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    }

    limparCampo();
}

function sortearAmigo() {
    if (amigos == '') {
        alert('Não há nomes disponíveis para o sorteio!');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        listaAmigos.innerHTML = '';
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigos[indice]}`;
    }   
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}