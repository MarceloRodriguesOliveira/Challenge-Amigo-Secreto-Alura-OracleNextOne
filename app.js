let amigosArr = [];
let amigo = document.getElementById("amigo");

// validação do input de nome
function addAmigoHandler(amigo) {
  if (amigo.value == "" || amigosArr.includes(amigo.value)) {
    alert("Digite um nome válido para o seu amigo!");
    return;
  }

  return amigo;
}

function adicionarAmigo() {
  const amigoValidated = addAmigoHandler(amigo);
  if (amigoValidated) {
    amigosArr.push(amigoValidated.value);
    console.log(amigosArr);
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
  const randomIndex = Math.floor(Math.random() * amigosArr.length);
  console.log("O sorteado foi: ", amigosArr[randomIndex]);
}

console.log(amigosArr);
