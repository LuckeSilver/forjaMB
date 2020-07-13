import React, { useState } from "react";

import "./styles.css";

import raceDB from "../../db/raceDB";

export default function Select(props) {
  const [selectedRace, setSelectedRace] = useState("");
  console.log(selectedRace);

  return (
    <div className="selectContainer">
      <span className="selectLabel">{props.label}</span>
      <select
        value={selectedRace}
        onChange={(e) => setSelectedRace(e.target.value)}
        className="defaultSelect"
      >
        {raceDB.map((race) => (
          <option key={race.id}>{race.race}</option>
        ))}
      </select>
    </div>
  );
}
