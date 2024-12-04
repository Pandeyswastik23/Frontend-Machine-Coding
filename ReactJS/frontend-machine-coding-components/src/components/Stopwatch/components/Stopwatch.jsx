/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../css/Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const hr = Math.floor(time / 3600);
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return `${hr < 10 ? "0" : ""}${hr} hr: ${
      min < 10 ? "0" : ""
    }${min} minute: ${sec < 10 ? "0" : ""}${sec} seconds`;
  };
  return (
    <div className="stopwatch_contianer">
      <h1 className="stopwatch_title"> Stopwatch</h1>
      <div className="stopwatch_display">{formatTime(time)}</div>
      <div className="stopwatch_buttons">
        <button onClick={handleStart} className="stopwatch-btn play">
          Play
        </button>
        <button onClick={handlePause} className="stopwatch-btn pause">
          Pause
        </button>
        <button onClick={handleStop} className="stopwatch-btn stop">
          Stop
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
