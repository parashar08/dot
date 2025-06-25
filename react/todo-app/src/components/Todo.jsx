import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!todoInput) return;
    if (todoArray.includes(todoInput)) {
      setTodoInput("");
      return;
    }
    setTodoArray((prev) => [...prev, todoInput]);
    setTodoInput("");
  };

  return (
    <div className="bg-gray-800 h-screen w-full">
      <section className="text-center py-8">
        <h1 className="text-2xl font-bold text-yellow-400">Todo List</h1>
      </section>
      <section>
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center justify-center gap-6"
        >
          <div>
            <input
              type="text"
              className="py-1 px-2 text-white outline-none border-2 border-red-500 rounded-sm"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          </div>
          <div className="bg-green-500 px-4 py-1.5 rounded-2xl">
            <button type="submit">Add todo</button>
          </div>
        </form>
      </section>
      <section className="text-center pt-16">
        <ul className="flex flex-col items-center">
          {todoArray.map((todo, index) => {
            return (
              <li
                key={index}
                className="bg-white px-4 py-1.5 my-4 w-56 flex items-center justify-around rounded-md"
              >
                <span>{todo}</span>
                <button>
                  <MdCheck />
                </button>
                <button>
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Todo;
