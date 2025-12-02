const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Load from localStorage
window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodoToDOM(todo.text, todo.completed));
};

addBtn.addEven
    tListener('click', () => {
    
    const text = input.value.trim();
    if (text !== '') {
        addTodoToDOM(text);
        saveTodoToLocalStorage(text);
        input.valu
            e = '';
    }
});

function addTodoToDOM(text, completed = false) {
    const li = document.createElement('li');
    li.textContent = text;

    if (completed) li.classList.add('completed');

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateLocalStorage();
    });

    const dele
        teBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        updateLocalStorage();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function saveTodoToLocalStorage(text) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateLocalStorage() {
    const todos = [];
    document.querySelectorAll('#todo-list li').forEach(li => {
        todos.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
