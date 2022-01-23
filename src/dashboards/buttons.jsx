import React from 'react';

export default function Buttons(props) {
  return (
    <div className="buttons">
      <button
        style={{ color: 'white', backgroundColor: props.color }}
        className="button"
        onClick={props.handleClicker}
      >
        New quote
      </button>
    </div>
  );
}
