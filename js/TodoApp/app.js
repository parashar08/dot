const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodo();
updateTodoList();

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        const todoObject = {
            text: todoText,
            completed: false,
        };
        allTodos.push(todoObject);
        updateTodoList();
        saveTodo();
        createTodoItem(todoText);
        todoInput.value = '';
    }
}

function updateTodoList() {
    todoListUL.innerHTML = '';
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    });
}

function createTodoItem(todo, todoIndex) {
    const todoId = 'todo-' + todoIndex;
    const todoLI = document.createElement('li');
    const todoText = todo.tet;
    todoLI.className = 'todo';
    todoLI.innerHTML = `
                    <input type="checkbox" id="${todoId}" />
                    <label for="${todoId}" class="custom-checkbox">
                        <img src="icons/check.png" alt="check" />
                    </label>
                    <label for="${todoId}" class="todo-text">
                        ${todoText}
                    </label>
                    <button class="delete-button">
                        <img src="icons/delete.png" alt="" />
                    </button>
    `;

    const deleteButton = todoLI.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        deleteTodoItem(todoIndex);
    });

    const checkBox = todoLI.querySelector('input');
    checkBox.addEventListener('change', () => {
        allTodos[todoIndex].completed = checkBox.checked;
    });
    saveTodo();
    return todoLI;
}

function deleteButton(todoIndex) {
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodo();
    updateTodoList();
}

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(allTodos));
}

function getTodo() {
    const todos = localStorage.getItem('todos') || [];
    return JSON.parse(todos);
}
