const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// se encarga de crear la tarea y mostrarla
function createTask(taskText) {
    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button');
    const taskSpan = document.createElement('span');

    taskSpan.textContent = taskText;

    taskSpan.addEventListener('click', () => {
        taskSpan.classList.toggle('completed');
        saveTasks();
    });

    newTask.appendChild(taskSpan);

    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
        newTask.remove();
        saveTasks();
    });

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    saveTasks();

    taskInput.value = '';
}

// funcion para guardar tareas
function saveTasks() {
    const tasks = [];

    document.querySelectorAll('li').forEach((task) => {
        tasks.push({
            text: task.querySelector('span').textContent,
            completed: task
                .querySelector('span')
                .classList.contains('completed'),
        });
    });
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// obtiene el texto del cuadro y verifica que no este vacio
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('por favor, escribe una tarea :)');
        return;

    }
    createTask(taskText);
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

savedTasks.forEach((task) => {
    createTask(task.text);

    if (task.completed){
        const lastTask =
            taskList.lastElementChild.querySelector('span');

        lastTask.classList.add('completed');
    }
})
