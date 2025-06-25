import { useEffect, useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [dateTime, setDateTime] = useState("");

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedData =
        now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedData} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
        <h2 className="text-xl font-bold text-white mt-4">{dateTime}</h2>
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
                <button
                  className="bg-yellow-600 p-1 rounded-md cursor-pointer"
                  onClick={() => handleTodoDelete(todo)}
                >
                  <MdDelete />
                </button>
              </li>
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
