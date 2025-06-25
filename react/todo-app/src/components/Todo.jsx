import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDateTime from "./TodoDateTime";

const Todo = () => {
  const [todoArray, setTodoArray] = useState([]);

  const handleFormSubmit = (todoInput, setTodoInput) => {
    if (!todoInput) return;
    if (todoArray.includes(todoInput)) {
      setTodoInput("");
      return;
    }
    setTodoArray((prev) => [...prev, todoInput]);
    setTodoInput("");
  };

  const handleTodoDelete = (todo) => {
    const updatedTodo = todoArray.filter(
      (originalTodo) => originalTodo != todo
    );
    setTodoArray(updatedTodo);
  };

  const handleAllTodo = () => {
    setTodoArray([]);
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
                data={todo}
                onHandleDeleteTodo={handleTodoDelete}
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
