// Variables:
let allTasks = [];
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("taskList"));

// HTML Elements
const input = document.querySelector("#inputText");
const buttonInsert = document.querySelector("#btnInsert");
const buttonRemoveAll = document.querySelector("#btnRemoveAll");
const taskList = document.querySelector("#listItems");

// Event Listeners:
buttonInsert.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
  // listener do enter pra adicionar na lista
  if (e.key === "Enter") {
    addTask();
  }
});

buttonRemoveAll.addEventListener("dblclick", cleanAll);

taskList.addEventListener(
  "dblclick",
  (e) => (e.target.className += " completo")
); // complete task

if (tasksFromLocalStorage) {
  allTasks = [...tasksFromLocalStorage];
}

renderTasks(allTasks);

// Funções:
function addTask() {
  if (input.value === "") return;

  let task = input.value;

  const li = document.createElement("li");
  li.className = "item-lista";
  li.appendChild(document.createTextNode(task));

  taskList.appendChild(li);
  allTasks.push(task);

  saveToLocalStorage(allTasks);

  input.value = "";
}

function cleanAll(e) {
  if (confirm("Você tem certeza de que quer remover todas as tarefas?")) {
    taskList.innerHTML = "";
    allTasks = [];
    saveToLocalStorage(allTasks);
  }
}

function saveToLocalStorage(tasks) {
  allTasksString = JSON.stringify(tasks);
  localStorage.setItem("taskList", allTasksString);
}

function renderTasks(tasks) {
  let i;
  list = "";
  for (i = 0; i < tasks.length; i++) {
    list += `
        <li class="item-lista">${tasks[i]}</li>
        `;
  }
  taskList.innerHTML = list;
}
