import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);

  // Set timeout done in miliseconds so ?* by 1000
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);

    // Code in here only executes once timer expires (Native JavaScript feature)
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

    //   function handleStop

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inative'}
      </p>
    </section>
  );
}
