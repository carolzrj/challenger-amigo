let listaAmigos = []

function adicionarAmigo () {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == " ") {
        alert ('Por favor, insira um nome!');
        return
    }
    if (listaAmigos.includes(nomeAmigo)) {
        alert ('Este nome já está incluso na lista.');
        return
    }
    else {
        listaAmigos.push(nomeAmigo);
        document.getElementById("amigo").value = " ";
        atualizarAmigos();
    }
}

function atualizarAmigos () {
    let amigosAtualizada = document.getElementById("listaAmigos");
    amigosAtualizada.innerHTML = " ";
    for (let i=0; i < listaAmigos.length; i++) {
        let itemAmigos = document.createElement("li");
        itemAmigos.innerHTML = listaAmigos[i];
        amigosAtualizada.appendChild(itemAmigos);
    }
}

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Não há amigos disponíveis para sortear. Por favor, insira um nome.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  