import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slice/counterSlice";

const Counter = () => {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const addNumber = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h2>counter app </h2>
      <h2>{data}</h2>

      <button onClick={() => dispatch(increment())}>add</button>
    </div>
  );
};

export default Counter;
