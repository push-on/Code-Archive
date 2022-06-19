const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById('todos');
const _submit = document.getElementById("enter"); 
const _Delete = document.getElementById("delete");
var ul = document.querySelector("ul"); 

const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
const todoData = [];
existingTodos.forEach(todo => { addTodo(todo); });

function addTodo(todoText) {
    todoData.push(todoText);
    const li = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}

_submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value.length > 0) {
        addTodo(input.value);
    }
});

_Delete.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem('todos');
});
