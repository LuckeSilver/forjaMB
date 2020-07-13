import React from "react";

import "./styles.css";

function Input(props) {
  return (
    <div className="inputContainer">
      <span className="inputLabel">{props.label}</span>
      <input className="defaultInput" type={props.type} />
    </div>
  );
}

export default Input;
