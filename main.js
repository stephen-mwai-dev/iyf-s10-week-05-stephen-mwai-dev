// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");


// State
let todos = [];
let currentFilter = "all";


// Functions
function createTodoElement(todo) {
// Create and return li element
}


function renderTodos() {
// Clear list and re-render based on filter
}


function addTodo(text) {
// Add new todo to array and render
}


function toggleTodo(id) {
// Toggle completed state
}


function deleteTodo(id) {
// Remove from array and render
}


function updateStats() {
// Update items left count
}


function filterTodos(filter) {
// Set current filter and re-render
}


// Event Listeners
form.addEventListener("submit", function(event) {
event.preventDefault();
// Add todo
});


todoList.addEventListener("click", function(event) {
// Handle click on tasks (delegation)
});


// Initialize
renderTodos();

To build your interactive To-Do List application, you can complete the starter JavaScript by applying the DOM manipulation techniques described in the sources. Below is the full implementation.
Completed JavaScript Implementation
// DOM Elements
const form = document.getElementById("todo-form"); // [1]
const input = document.getElementById("todo-input"); // [1]
const todoList = document.getElementById("todo-list"); // [1]
const itemsLeft = document.getElementById("items-left"); // [1]
const filters = document.querySelectorAll(".filter"); // [1]
const clearCompletedBtn = document.getElementById("clear-completed"); // [1]

// State
let todos = []; // [2]
let currentFilter = "all"; // [2]

// Functions
function createTodoElement(todo) {
    // Create the main list item [3]
    const li = document.createElement("li");
    li.dataset.id = todo.id; // Using data attributes to store ID [4]
    if (todo.completed) {
        li.classList.add("completed"); // Strikethrough is handled via this class [1, 5]
    }

    // Task text [6]
    const span = document.createElement("span");
    span.textContent = todo.text;
    li.appendChild(span);

    // Delete button [7]
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {
    // Clear the existing list [8]
    todoList.innerHTML = "";

    // Filter todos based on current state [1]
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    });

    // Dynamically add elements [2, 7]
    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

function addTodo(text) {
    const newTodo = {
        id: Date.now(), // Unique ID for identification
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // [2]
    renderTodos();
}

function updateStats() {
    // Calculate items that are not completed [1]
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`; // [6]
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh [2, 9]
    const text = input.value.trim();
    if (text !== "") { // Empty tasks not allowed [5]
        addTodo(text);
        input.value = ""; // Clear input after adding [5]
    }
});

// Event Delegation for clicking on tasks or delete buttons [10, 11]
todoList.addEventListener("click", function(event) {
    const li = event.target.closest("li");
    if (!li) return;
    
    const id = Number(li.dataset.id);

    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

// Filter button functionality [4, 12]
filters.forEach(button => {
    button.addEventListener("click", (e) => {
        // Update active filter styling
        filters.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        // Set filter state and re-render
        currentFilter = e.target.dataset.filter;
        renderTodos();
    });
});

// Clear Completed functionality [1]
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// Bonus: Edit Tasks (Double-click) [1, 13, 14]
todoList.addEventListener("dblclick", function(event) {
    if (event.target.tagName === "SPAN") {
        const li = event.target.closest("li");
        const id = Number(li.dataset.id);
        const originalText = event.target.textContent;
        
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = originalText;
        li.innerHTML = "";
        li.appendChild(editInput);
        editInput.focus();

        const saveEdit = () => {
            const newText = editInput.value.trim();
            if (newText) {
                todos = todos.map(t => t.id === id ? { ...t, text: newText } : t);
            }
            renderTodos();
        };

        editInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") saveEdit(); // [14]
            if (e.key === "Escape") renderTodos(); // Cancel [14]
        });

        editInput.addEventListener("blur", saveEdit); // Save on click away
    }
});

// Initialize
renderTodos();
