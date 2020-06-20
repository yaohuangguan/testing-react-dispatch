import React from "react";
import { dispatcher } from "react-dispatch";
import { SPEED_UP, SLOW_DOWN, ONCE_UPDATE_COUNT } from "./constant";
const Component = () => {
  const onSpeedUp = () => {
    dispatcher.dispatch(SPEED_UP, 1);
  };
  const onSlowDown = () => dispatcher.dispatch(SLOW_DOWN, 1);
  const onClickOnce = () => dispatcher.dispatch(ONCE_UPDATE_COUNT, 1);
  const unMount = () => {
    dispatcher.off([SPEED_UP, SLOW_DOWN, ONCE_UPDATE_COUNT]);
  };
  return (
    <div>
      <button className="App-link" onClick={onSpeedUp}>
        Speed Up
      </button>
      <button className="App-link" onClick={onSlowDown}>
        Slow Down
      </button>
      <button className="App-link" onClick={onClickOnce}>
        Dispatch Once
      </button>
      <button className="App-link" onClick={unMount}>
        Uninstall
      </button>
    </div>
  );
};

export default Component;
