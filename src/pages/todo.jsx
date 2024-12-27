import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodos, updateTodo } from "../slice/todoSlice";
// import { faker } from "@faker-js/faker";
const Todo = () => {
  //hook for input
  const [input, setInput] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);

  //use selector
  const data = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  //   const randomeName = faker.person.fullName();
  //   const todoGenerate = (randomeName) => {
  //     dispatch(addTodo(randomeName));
  //   };

  const addTodos = (input) => {
    if (input.trim() !== "") {
      if (editIndex == null) {
        dispatch(addTodo(input));
      } else {
        dispatch(updateTodo({ index: editIndex, updateName: input }));
      }
      setInput("");
    }
  };
  const deleteTodo = (index) => {
    dispatch(deleteTodos(index));
    setEditIndex(null);
    setInput("");
  };

  const update = (index) => {
    setEditIndex(index);
    setInput(data[index]?.name);
  };

  console.log(input);
  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          style={{ border: "2px solid black" }}
        />
        <button onClick={() => addTodos(input)}>
          {editIndex == null ? "Add" : "Update"}{" "}
        </button>
        {data?.map((todo, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",

                gap: "20px",
              }}
            >
              <p>{todo.name}</p>
              <button onClick={() => deleteTodo(index)}>del</button>
              <button onClick={() => update(index)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
