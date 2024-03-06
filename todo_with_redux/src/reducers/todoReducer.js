import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants";

function todoReducer(todos = [], actions) {
  if (actions.type == ADD_TODO) {
    return [
      ...todos,
      { id: actions.payload.todoId, title: actions.payload.title },
    ];
  }
  if (actions.type == REMOVE_TODO) {
    return todos.filter((todo) => todo.id !== actions.payload);
  }
  if (actions.type == EDIT_TODO) {
    return todos.map((todo) => {
      if (todo.id == actions.payload.id) {
        todo.title = actions.payload.title;
      }
      return todo;
    });
  }
  return todos;
}
