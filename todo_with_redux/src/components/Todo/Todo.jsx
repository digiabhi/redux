import { bindActionCreators } from "redux";
import { removeTodo, editTodo } from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Todo({ title, id }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ removeTodo, editTodo }, dispatch);
  const [isEditting, setIsEditting] = useState(false);
  const [edittedText, setEdittedText] = useState(title);
  function updateTodo() {
    if (isEditting) {
      actions.updateTodo({ id: id, title: edittedText });
      setIsEditting(false);
    } else {
      setIsEditting(true);
    }
  }
  return (
    <div>
      {isEditting ? (
        <input
          value={edittedText}
          onChange={(e) => setEdittedText(e.target.value)}
        />
      ) : (
        edittedText
      )}
      <button onClick={() => actions.removeTodo(id)}>Delete</button>
      <button onClick={updateTodo}>{isEditting ? "Save" : "Edit"}</button>
    </div>
  );
}

export default Todo;
