// get element from the DOM
const todoInput = document.querySelector('#todoInput');
const btn = document.querySelector('.addTodoBtn');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', ()=>{
    btn.addEventListener('click', ()=>{
        const todo = todoInput.value.trim();
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="check"/>
        <span id="todo">${todo}</span>
        <img src="delete.svg" id="del"/>`;
        todoList.prepend(li);

        // input field is clear after add todo
        todoInput.value= '';

        // delete btn
        const del = document.querySelector('#del');
        del.addEventListener('click', ()=>{
            del.parentNode.remove();
        })
    
        // when check is active the todo is mark
        const checkbox = document.getElementById("check");
        const myTodo = document.querySelector('#todo');
        checkbox.addEventListener('change', ()=>{
            if(!checkbox.checked) {
                myTodo.style.textDecoration = 'none';
            } else {
                myTodo.style.textDecoration = 'line-through';
            };
        })
    
    });
    
})
