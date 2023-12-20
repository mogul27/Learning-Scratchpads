import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    // Ref always has a current property which you can use to access the default input
    // properties
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''
;  }

  return (
    <section id="player">
      {/* Below means if enteredPlayerName exists then output the entered player name,
      otherwise output unknown entity */}
      {/* Can also be written as {enteredPlayerName ? enteredPlayerName : "unknown entity"}  */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
