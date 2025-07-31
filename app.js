//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosArr = [];
let amigo = document.getElementById("amigo");

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

console.log(amigosArr);
