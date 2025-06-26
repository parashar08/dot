import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDateTime from "./TodoDateTime";
import { setLocalStorageTodo, getLocalStorageTodo } from "./TodoLocalStorage";

const Todo = () => {
  const [todoArray, setTodoArray] = useState(getLocalStorageTodo());

  const handleFormSubmit = (todoInput, setTodoInput) => {
    const { id, content, checked } = todoInput;
    if (!content) return;
    const ifTodoContentMatch = todoArray.find(
      (todo) => todo.content === content
    );
    if (ifTodoContentMatch) return;
    setTodoArray((prev) => [...prev, { id, content, checked }]);
  };

  setLocalStorageTodo(todoArray);

  const handleTodoDelete = (todo) => {
    const updatedTodo = todoArray.filter(
      (originalTodo) => originalTodo.content != todo
    );
    setTodoArray(updatedTodo);
  };

  const handleAllTodo = () => {
    setTodoArray([]);
  };

  const handleCheckedTodo = (data) => {
    const updatedTodo = todoArray.map((todo) => {
      if (todo.content === data) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });
    setTodoArray(updatedTodo);
  };

  return (
    <div className="bg-gray-800 h-screen w-full">
      <section className="text-center py-8">
        <h1 className="text-2xl font-bold text-yellow-400">Todo List</h1>
        <TodoDateTime />
      </section>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="text-center pt-16">
        <ul className="flex flex-col items-center">
          {todoArray.map((todo, index) => {
            return (
              <TodoList
                key={index}
                data={todo.content}
                checked={todo.checked}
                onHandleDeleteTodo={handleTodoDelete}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
        <button
          onClick={handleAllTodo}
          className="mt-4 cursor-pointer text-center bg-red-800 px-4 py-2 text-white font-bold rounded-md"
        >
          Clear All
        </button>
      </section>
    </div>
  );
};

export default Todo;
