import { useState, useEffect } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count) {
      localStorage.setItem("count", count.toString());
    }
  }, [count]);

  useEffect(() => {
    const countFromStorage = localStorage.getItem("count") || "0";
    setCount(parseInt(countFromStorage));
  }, []);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
    localStorage.setItem("count", "0");
  }
  return (
    <>
      <Button handleClick={decrement}>-</Button>
      <span className="font-bold text-3xl">{count}</span>
      <Button handleClick={increment}>+</Button>
      <Button handleClick={reset}>Reset</Button>
    </>
  );
}
