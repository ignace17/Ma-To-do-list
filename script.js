const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Charger les tâches au démarrage
document.addEventListener('DOMContentLoaded', () => {
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
savedTodos.forEach(todo => displayTodo(todo));
});

// Ajouter une tâche
addBtn.addEventListener('click', () => {
const text = todoInput.value.trim();
if (text !== "") {
displayTodo(text);
saveTodo(text);
todoInput.value = "";
}
});

function displayTodo(text) {
const li = document.createElement('li');
li.innerHTML = `<span>${text}</span> <button onclick="deleteTodo(this, '${text}')">❌</button>`;

// Cliquer sur le texte pour barrer
li.querySelector('span').addEventListener('click', function() {
    this.style.textDecoration = this.style.textDecoration === 'line-through' ? 'none' : 'line-through';
});

todoList.appendChild(li);
}

function saveTodo(text) {
const todos = JSON.parse(localStorage.getItem('todos')) || [];
todos.push(text);
localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(btn, text) {
btn.parentElement.remove();
let todos = JSON.parse(localStorage.getItem('todos'));
todos = todos.filter(t => t !== text);
localStorage.setItem('todos', JSON.stringify(todos));
}