const input = document.querySelector('.input');
const btn = document.querySelector('.addBtn');
const todo_container = document.querySelector('.todo_container')

btn.addEventListener('click', newTodo);
todo_container.addEventListener('click', btnCtrl);

function newTodo(){

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    todo_container.appendChild(todoDiv);
    
    const todoList = document.createElement('li');
    todoList.classList.add('todoList');
    todoDiv.appendChild(todoList);
      
    todoList.innerText = input.value;
    
    if(input.value.trim() === ''){
        todo_container.removeChild(todoDiv);
        alert('Task is empty');
    }

    const markBtn = document.createElement('button');
    markBtn.classList.add('markBtn');
    markBtn.textContent = 'Mark';
    todoDiv.appendChild(markBtn);

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'Delete';
    todoDiv.appendChild(delBtn);

    input.value = '';
}

function btnCtrl(e){
    const item = e.target;
    const todo = item.parentElement;
    if(item.classList.contains('markBtn')){
        todo.classList.toggle('blur');
    }

    if(item.classList.contains('delBtn')){
        todo.classList.add('del')
        todo.remove();
    }

}