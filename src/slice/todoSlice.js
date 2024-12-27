import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: Date.now(), name: action.payload };
      state.push(newTodo);
    },
    deleteTodos: (state, action) => {
      const todo = state.filter((todo, i) => i !== action.payload);
      return todo;
    },

    updateTodo: (state, action) => {
      const { index, updateName } = action.payload;

      if (state[index]) {
        state[index].name = updateName;
      }
    },
  },
});

export const { addTodo, deleteTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
