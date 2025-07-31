# 🎁 Amigo Secreto - Projeto JavaScript

Um pequeno projeto em HTML, CSS e JavaScript que simula o sorteio de um amigo secreto. O usuário pode adicionar nomes, visualizar a lista e realizar o sorteio de forma interativa.

## ✨ Funcionalidades

- Adicionar nomes de participantes.
- Prevenção de nomes duplicados ou vazios.
- Listagem em tempo real dos amigos adicionados.
- Sorteio aleatório de um dos amigos.

## 🚀 Como usar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite os nomes dos participantes no campo de entrada e pressione **Enter** ou clique em **"Adicionar"**.
4. Após inserir os nomes, clique em **"Sortear amigo"** para exibir o nome sorteado.

## 🧠 Lógica JavaScript

### Variáveis principais

```js
let amigosArr = []; // Armazena os nomes adicionados
let amigo = document.getElementById("amigo"); // Campo de entrada
let lista = document.getElementById("listaAmigos"); // UL da lista de amigos
let resultadoSorteio = document.getElementById("resultado"); // UL do resultado
