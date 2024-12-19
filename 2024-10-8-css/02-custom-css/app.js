function collectData() {
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const index = getNumberOfTasksInLocalStorage();
    return {
        index,
        description,
        date,
        time,
    };
}

function generateHTML(data) {
    const newHTML = `
        <div class="taskContent">
            <div> <img src="assets/images/deletebutton.png" onclick="deleteTask(${data.index})" /> </div>
            <div>${data.description}</div>
            <div>${data.date}</div>
            <div>${data.time}</div>
        </div>
    `
    return newHTML;
}

function renderHTML(newHTML) {
    const tasksContainer = document.getElementById('tasks');

    // Create the task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');  // Add task class
    taskElement.innerHTML = newHTML;

    // Append the task to the container
    tasksContainer.appendChild(taskElement);

    // Trigger fade-in by changing opacity to 1
    setTimeout(() => {
        taskElement.style.opacity = '1';  // Fade in the task
    }, 10);  // Small delay to allow the task to be added to the DOM
}

function clearForm() {
    const tasksForm = document.getElementById('tasksForm');
    tasksForm.reset();
    const descriptionInput = document.getElementById('description');
    descriptionInput.focus();
}

function saveTaskToStorage(taskObject) {
    const currentTasksInStorageJSON = localStorage.getItem('tasks');
    const currentTasksInStorage = JSON.parse(currentTasksInStorageJSON);
    currentTasksInStorage.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(currentTasksInStorage));
}

function loadTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
        const tasks = JSON.parse(tasksJSON);
        for (const task of tasks) {
            const newHTML = generateHTML(task);
            const tasksContainer = document.getElementById('tasks');

            // Create a new task element for loaded tasks
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');  // No fade-in for loaded tasks
            taskElement.innerHTML = newHTML;

            // Set opacity to 1 immediately for loaded tasks (no fade-in)
            taskElement.style.opacity = '1';

            // Append the task to the container
            tasksContainer.appendChild(taskElement);
        }
    }
}

function initStorage() {
    const currentTasksInStorageJSON = localStorage.getItem('tasks');
    if (!currentTasksInStorageJSON) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }
}

function getNumberOfTasksInLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')).length;
}

function addTask(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    renderHTML(newHTML);
    saveTaskToStorage(data);
    clearForm();
}

function deleteTask(index) {
    alert(`will delete item #${index} from local storage`);
}

// Initialize localStorage if it's empty
initStorage();
// Load tasks from localStorage
loadTasksFromLocalStorage();
