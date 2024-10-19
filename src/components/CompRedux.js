import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./Redux/counterSlice";
import { Button, Flex } from "antd";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex-col px-4 ">
      <h1 className="p-2 m-2 text-2xl  rounded-md bg-slate-400 text-[#ffd60a] hover:text-rose-600 font-bold">
        Counter: {count}
      </h1>
      <Flex justify="space-around" className="w-[30%]">
        <Button type="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button type="primary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button type="primary" onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </Button>
      </Flex>
    </div>
  );
}

export default App;
