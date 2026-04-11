// 1. Select the elements from the HTML
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const doneCount = document.getElementById('doneCount');
const filterBtns = document.querySelectorAll('.filter-btn');

// 2. Create an array to hold our tasks and track the current filter state
let todos = [];
let currentFilter = 'all';

// 3. Add event listeners for adding a task
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        // Create a new task object
        const newTodo = { id: Date.now(), text: text, completed: false };
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input field
        renderTodos();
    }
}

// 4. Handle clicking inside the list (Checking off or Deleting)
todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    
    const id = Number(li.dataset.id);

    // If the delete button was clicked
    if (e.target.classList.contains('delete-btn')) {
        todos = todos.filter(todo => todo.id !== id);
    } 
    // If the checkbox was clicked
    else if (e.target.type === 'checkbox') {
        const todo = todos.find(todo => todo.id === id);
        if (todo) todo.completed = e.target.checked;
    }
    
    renderTodos();
});

// 5. Handle Filter Buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove 'active' class from all buttons, add to the clicked one
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update current filter state based on button ID
        currentFilter = e.target.id.replace('filter-', '');
        renderTodos();
    });
});

// 6. Update the display and the stats
function renderTodos() {
    // Filter the tasks based on the active tab
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    // Clear the current list
    todoList.innerHTML = '';

    // Render the filtered tasks
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.id;
        li.innerHTML = `
            <input type="checkbox" style="margin-right: 12px; transform: scale(1.2); cursor: pointer;" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
    });

    // Update the stats bar
    updateStats();
}

function updateStats() {
    totalCount.textContent = todos.length;
    const activeTasks = todos.filter(t => !t.completed).length;
    activeCount.textContent = activeTasks;
    doneCount.textContent = todos.length - activeTasks;
}
