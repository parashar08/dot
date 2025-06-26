const todoKey = "reactTodo";

export const setLocalStorageTodo = (todoArray) => {
  return localStorage.setItem(todoKey, JSON.stringify(todoArray));
};

export const getLocalStorageTodo = () => {
  const rawTodo = JSON.parse(localStorage.getItem(todoKey)) || [];
  return rawTodo;
};
