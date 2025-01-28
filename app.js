let listaAmigos = []

function adicionarAmigo () {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == " ") {
        alert ('Por favor, insira um nome!')
    } else {
        listaAmigos.push(nomeAmigo);
        document.getElementById("amigo").value = " ";
        atualizarAmigos();
    }
}

function atualizarAmigos () {
    let amigosAtualizada = document.getElementById("listaAmigos");
    amigosAtualizada.innerHTML = " ";
    for (let i=0; i < amigos.length; i++) {
        let itemAmigos = document.createElement("li");
        itemAmigos.innerHTML = listaAmigos[i];
        amigosAtualizada.appendChild(itemAmigos);
    }
}