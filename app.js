let amigosArr = [];
let amigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultadoSorteio = document.getElementById("resultado");

// validação do input de nome
function addAmigoHandler(amigo) {
  if (amigo.value == "" || amigosArr.includes(amigo.value)) {
    alert("Digite um nome válido para o seu amigo!");
    return;
  }

  return amigo;
}

function listarAmigos() {
  lista.innerHTML = "";
  for (let i = 0; i < amigosArr.length; i++) {
    let novoAmigo = document.createElement("li");
    novoAmigo.innerHTML = `${amigosArr[i]}`;
    lista.appendChild(novoAmigo);
  }
}

function adicionarAmigo() {
  const amigoValidated = addAmigoHandler(amigo);
  if (amigoValidated) {
    amigosArr.push(amigoValidated.value);
    listarAmigos();
  }

  return;
}

amigo.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    adicionarAmigo();
  }
});

//sortear amigos
function sortearAmigo() {
  resultadoSorteio.innerHTML = "";
  const randomIndex = Math.floor(Math.random() * amigosArr.length);
  const sorteado = document.createElement("li");
  sorteado.innerHTML = `O sorteado foi: ${amigosArr[randomIndex]}`;
  resultadoSorteio.appendChild(sorteado);
}
