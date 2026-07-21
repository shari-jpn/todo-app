const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText == ''){
        alert('Por favor, escribe una tarea :)');
        return;
    }
    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button');
    newTask.textContent = taskText;
    deleteButton.textContent = '❌'
    deleteButton.addEventListener('click',() => {
        newTask.remove();
    })
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value ='';
});


