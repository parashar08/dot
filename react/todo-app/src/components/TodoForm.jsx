import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [todoInput, setTodoInput] = useState({});

  const handleInputChange = (value) => {
    setTodoInput({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(todoInput, setTodoInput);
    setTodoInput({ id: "", content: "", checked: false });
  };

  return (
    <section>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-center gap-6"
      >
        <div>
          <input
            type="text"
            className="py-1 px-2 text-white outline-none border-2 border-red-500 rounded-sm"
            value={todoInput.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="bg-green-500 px-4 py-1.5 rounded-2xl">
          <button type="submit">Add todo</button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
