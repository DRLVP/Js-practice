// HTML ELEMENTS
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

// MAKE ARRAY
let taskListArr = [];
function addTask() {
    const tasks = taskInput.value.trim();

    if (tasks !== "") {
        taskListArr.unshift(tasks);
        taskInput.value = "";

        updateTask();
    } else {
        alert("please enter a task")
    }
}

function updateTask() {
    if (taskListArr === "") {
        taskList.innerHTML = "<p>empty task</p>";


    } else {
        taskListArr.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerText = `${index + 1}:${task}`;
            taskList.appendChild(li);
        })
    }
}

addTaskButton.addEventListener('click', addTask);

updateTask();