// ADD TASK 
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('.task__list');

let taskArr = [];

function addTaskList() {
    let taskName = taskInput.value;

    if (taskName.trim() !== "") {
        taskArr.unshift(taskName);
        taskInput.value = "";
        const liElement = document.createElement("li").innerText = `${taskArr.length}`;

        taskList.appendChild(liElement);

    } else {
        alert('please enter a task');
    }
}

addBtn.addEventListener('click', addTaskList);

