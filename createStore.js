import { createStore } from "redux";

function demoReducer(state, action) {
  if (action.type == "add_item") {
    return [...state, { name: action.itemName }];
  }
  return state;
}

const initialState = [{ name: "apple" }, { name: "rice" }];

const store = createStore(demoReducer, initialState);

console.log(store.getState());

// the only way to update the store is by dispatching an action

store.dispatch({
  type: "add_item",
  itemName: "Banana",
});

console.log(store.getState());
