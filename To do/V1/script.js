// Get elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add todo item
function addTodoItem(e) {
    e.preventDefault();
    if (todoInput.value) {
        // Create list item
        const li = document.createElement('li');
        li.innerHTML = todoInput.value;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Del';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        // Add checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        li.appendChild(checkbox);

        // Add to list
        todoList.appendChild(li);

        // Clear input
        todoInput.value = '';
    }
}

// Delete todo item
function deleteTodoItem(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
}

// Mark todo item as done
function markTodoItemAsDone(e) {
    if (e.target.classList.contains('checkbox')) {
        e.target.parentElement.classList.toggle('done');
    }
}

// Event listeners
todoForm.addEventListener('submit', addTodoItem);
todoList.addEventListener('click', deleteTodoItem);
todoList.addEventListener('click', markTodoItemAsDone);