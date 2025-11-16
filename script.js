let lista = [];
let entrada = "";

while (entrada !== "sair") {
  entrada = prompt("Digite sua tarefa (Digite 'sair' para encerrar)");
  if (entrada !== "sair") {
    lista.push(entrada);
  }
}
alert("Tarefas:\n" + lista.join("\n"));

