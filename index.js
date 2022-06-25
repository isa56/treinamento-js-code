// Variables:
let allTasks = [];
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("taskList"));

// HTML Elements
const input = document.querySelector("#inputText");
const buttonInsert = document.querySelector("#btnInsert");
const buttonRemoveAll = document.querySelector("#btnRemoveAll");
const taskList = document.querySelector("#listItems");
const temp = document.querySelector("#temp");
const maxTemp = document.querySelector("#max-temp");
const minTemp = document.querySelector("#min-temp");

buttonInsert.addEventListener("click", addTask);

buttonRemoveAll.addEventListener("dblclick", cleanAll);

taskList.addEventListener(
  "dblclick",
  (e) => (e.target.className += " completo")
); // complete task

if (tasksFromLocalStorage) {
  allTasks = [...tasksFromLocalStorage];
}

renderTasks(allTasks);
getWeatherData();   // chama a função

async function getWeatherData() {
  // função assíncrona porque se deve esperar uma resposta, que não necessariamente vai ser instantânea
  const apiKey = "b7ade4ba2b753ea8b03581bab69389a5"; // código da API retirado da dashboard do site
  const units = "metric"; // opção da API, para usar a unidade padrão (ºC)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=-21.7642&lon=-43.3496&appid=${apiKey}&units=${units}&lang=pt_br`; // URL, para ficar fácil de alterar

  await fetch(url, { method: "GET" }) // método que envia a requisição
    .then((response) => {
      if (!response.ok) {
        // checa se ocorreu erro
        return new Error("falhou a requisição"); // cairá no catch da promise
      }
      // verificando pelo status
      if (response.status === 404) {
        return new Error("não encontrou qualquer resultado");
      }

      return response.json().then((text) => {
        // Coloca os dados na tela
        temp.textContent = "Temperatura atual: " + text.main.temp;
        maxTemp.textContent = "Temperatura máxima: " + text.main.temp_max;
        minTemp.textContent = "Temperatura mínima: " + text.main.temp_min;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

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
  localStorage.setItem("taskList", "");
  allTasks = [];

  if (confirm("Você tem certeza de que quer remover todas as tarefas?")) {
    taskList.innerHTML = "";
  }

  localStorage.setItem("taskList", JSON.stringify(allTasks));
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
