import React, { useState, useEffect, useClock } from "react";
import "./index.css";
import "./App.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(24);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(24);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      {seconds}

      <button className="button" className="timereffect" onClick={toggle}>
        Start
      </button>
      <button className="button" className="timereffect" onClick={reset}>
        Reset
      </button>
    </div>
    // <div className="app">
    //   <div className="time">
    //     {seconds}s
    //   </div>
    //   <div className="row">
    //     <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
    //       {isActive ? 'Pause' : 'Start'}
    //     </button>
    //     <button className="button" onClick={reset}>
    //       Reset
    //     </button>
    //   </div>
    // </div>
  );
};

export default Timer;
