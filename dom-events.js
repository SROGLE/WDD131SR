let tasks = [];

function taskTemplate(task) {
  return `
    <li class="task-item ${task.completed ? 'strike' : ''}">
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks() {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = tasks.map(taskTemplate).join("");
}

function newTask() {
  const inputElement = document.querySelector("#todo");
  const taskDetail = inputElement.value.trim();
  if (taskDetail === "") return; // Prevent adding empty tasks
  
  tasks.push({ detail: taskDetail, completed: false });
  inputElement.value = ""; // Clear input after adding
  renderTasks();
}

function removeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText;
  tasks = tasks.filter(task => task.detail !== taskText);
  renderTasks();
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskText);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
  }
  renderTasks();
}

function manageTasks(e) {
  const taskElement = e.target.closest("li");
  if (!taskElement) return;
  
  if (e.target.dataset.action === "delete") {
    removeTask(taskElement);
  } else if (e.target.dataset.action === "complete") {
    completeTask(taskElement);
  }
}

// Attach event listeners
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// Initial render
renderTasks();
