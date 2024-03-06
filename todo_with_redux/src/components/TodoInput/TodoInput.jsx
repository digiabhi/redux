import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions";
function TodoInput() {
  const [todoText, setTodoText] = useState();
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  function insertTodo() {
    const lastTodoId =
      todoList.length == 0 ? 0 : todoList[todoList.length - 1].id;
    dispatch(addTodo({ title: todoText, id: lastTodoId + 1 }));
    setTodoText("");
  }
  return (
    <>
      <input
        value={todoText}
        type="text"
        placeholder="add todo ..."
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={insertTodo}>Add Todo</button>
    </>
  );
}

export default TodoInput;
