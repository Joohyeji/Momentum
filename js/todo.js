const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

// todo를 local에 저장하기위함
let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteToDo = (e) => {
    // const li = e.currentTarget;
    const li = e.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((v)=> {return v.id !== parseInt(li.id)});
    saveToDos(toDos);
};

const paintTodo = (newTodoObj) => {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Delete'
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    // todo를 배열에 push
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj)
    saveToDos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
