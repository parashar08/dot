import { MdCheck, MdDelete } from "react-icons/md";

const TodoList = ({
  data,
  onHandleDeleteTodo,
  checked,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="bg-white px-4 py-1.5 my-4 w-56 flex items-center justify-around rounded-md">
      <span className={checked ? "line-through" : ""}>{data}</span>
      <button
        className="bg-green-600 p-1 rounded-2xl cursor-pointer"
        onClick={() => onHandleCheckedTodo(data)}
      >
        <MdCheck />
      </button>
      <button
        className="bg-yellow-600 p-1 rounded-2xl cursor-pointer"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default TodoList;
