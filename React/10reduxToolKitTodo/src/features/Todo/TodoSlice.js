import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //state gives the current state
    //action gives the values to act on (like id to remove)
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
