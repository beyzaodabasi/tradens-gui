import React, { useState, useEffect } from 'react';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-red.css';

//icons
import { MdTimer } from 'react-icons/md';

function Timer() {
  const [isHovering, setIsHovering] = useState(false);
  const [running, setRunning] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [fullTime, setFullTime] = useState('00:00:000');

  const timerStartStop = () => setRunning((prevRunning) => !prevRunning);

  const timerReset = () => {
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setFullTime('00:00:000');
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setMilliseconds((prevTime) => prevTime + 100);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    setSeconds(Math.floor(milliseconds / 1000) % 60);
    setMinutes(Math.floor(milliseconds / 60000));
    setFullTime(
      `${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}:${
        milliseconds > 999 ? Math.floor(milliseconds % 1000) : milliseconds
      }`
    );
  }, [milliseconds, minutes, seconds]);

  return (
    <div className="Timer">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <AwesomeButton
          type="primary"
          ripple
          size="small"
          onPress={timerStartStop}
        >
          START/STOP
        </AwesomeButton>
        <AwesomeButton type="primary" ripple size="small" onPress={timerReset}>
          RESET
        </AwesomeButton>
      </div>
      <p>
        <MdTimer
          style={{
            position: 'relative',
            top: '7px',
            width: '25px',
            height: '25px',
            marginTop: '5px',
            marginRight: '5px',
          }}
        />
        {fullTime}
      </p>
    </div>
  );
}

export default Timer;
