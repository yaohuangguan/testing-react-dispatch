import React, { useEffect, useState } from "react";
import { dispatcher } from "react-dispatch";
const Tests = () => {
  const [count, setCount] = useState(0);
  const [once, setOnce] = useState(0);
  useEffect(() => {
    console.log("events", dispatcher.events);
    console.log("Once events", dispatcher.onceEvents);
    dispatcher.subscribe(
      "ALL_TIME",
      (data) => setCount((prev) => prev + data + 1)
    );
    dispatcher.once("ONLY_ONCE", (data) => setOnce((prev) => prev + data + 1));
  }, []);
  return (
    <div>
      <div>count:{count}</div>
      <div>once:{once}</div>
    </div>
  );
};

export default Tests;
