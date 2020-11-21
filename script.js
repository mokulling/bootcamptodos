var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


function renderTodos() {
    //clear existing todos
    todoList.innerHTML = '' 
    // re-redner to dos 
    for (var i = 0; i < todos.length; i++) {
        //create li element
        var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        // append list item to #todo-list
        todoList.appendChild(li)
    }
}

function addTodo (event) {
    event.preventDefault()
    //get input value - todoInput
    var newtodo = todoInput.value
    if (newtodo !== '') {
    //push value into todos array
    todos.push(newtodo)
    //call renderTodos 
    todoInput.value =''
    renderTodos()

    }
}


todoForm.addEventListener('submit', addTodo)

renderTodos()