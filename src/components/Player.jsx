import { useState } from "react";

export default function Player({ playerName, onChangePlayerName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChangePlayerName(e) {
    onChangePlayerName((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: e.target.value,
      };
    });
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChangePlayerName} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
