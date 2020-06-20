import React, { useState, useEffect } from "react";
import { SPEED_UP, SLOW_DOWN, ONCE_UPDATE_COUNT } from "./constant";
import { dispatcher } from "react-dispatch";

const BrotherComponent = ({ onSpeedChange }) => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [onceCount, setOnceCount] = useState(0);
  useEffect(() => {
    dispatcher.subscribe(SPEED_UP, (data) => {
      setCount((prev) => prev - data);
      onSpeedChange(count ? count : data);
      setAction(SPEED_UP)
    });
    dispatcher.subscribe(SLOW_DOWN, (data) => {
      setCount((prev) => prev + data);
      onSpeedChange(count ? count : data);
      setAction(SLOW_DOWN)

    });
    dispatcher.once(ONCE_UPDATE_COUNT, (data) =>
      setOnceCount((prev) => prev + data)
    );
    return () => {
      dispatcher.off([SPEED_UP, SLOW_DOWN, ONCE_UPDATE_COUNT]);
    };
  }, [onSpeedChange, count]);
  return (
    <>
      <div>
        {action ? action : "Data from dispatch: "}
        {count}
      </div>
      <div>ONLY ONCE - Data from dispatch: {onceCount}</div>
    </>
  );
};

export default BrotherComponent;
