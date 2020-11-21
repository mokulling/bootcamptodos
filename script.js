var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = JSON.parse(localStorage.getItem('todos')) || []


function renderTodos() {
    //clear existing todos
    todoList.innerHTML = '' 
    // re-redner to dos 
    for (var i = 0; i < todos.length; i++) {
        //create li element
        var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        //add data-index attribute
        li.setAttribute('data-index', i)
        var button = document.createElement('button')
        button.innerText = 'Complete'
        li.appendChild(button)
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()

    }
}

/*function todocount () {
    var todocount = parseInt(todoCountSpan.innerHTML)
    

}*/
    


function removeTodo (event) {
    var target = event.target
    if (target.matches('button')) {
        // find index.form li
        var index = parseInt(target.parentNode.getAttribute('data-index'))
        //remove the todo from todos array
        todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todos))

        // re render todos 
        renderTodos()

    }

}

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click',  removeTodo)


renderTodos()