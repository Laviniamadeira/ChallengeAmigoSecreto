let listaAmigos = [];

// Função responsável por adicionar um amigo à lista

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Este nome já está na lista.");
        return;
    }

    listaAmigos.push(nome);
    console.log("Lista de amigos:", listaAmigos);
    inputAmigo.value = "";

    atualizarListaAmigos();
}

// Função que atualiza a lista exibida na tela com os amigos adicionados

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaAmigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}
// Função que seleciona aleatoriamente um amigo da lista

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

