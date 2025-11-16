let lista = [];

function addItem() {
  const input = document.getElementById("task-input");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  lista.push(texto);
  input.value = ""; // limpa o input após adicionar

  atualizarLista();
}

function atualizarLista() {
  const ul = document.getElementById("task-list");
  ul.innerHTML = "";

  lista.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// Adiciona event listener ao botão
document.getElementById("add-task-btn").addEventListener("click", function(e) {
  e.preventDefault();
  addItem();
});

