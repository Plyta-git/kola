import React from "react";

const WordToggler = ({ word,isWordVisible }) => {
  return (
    <div style={{ userSelect: 'none' }}>
      {isWordVisible ? <p>{word}</p> : <p>HOLD TO SHOW WORD</p>}
    </div>
  );
};

export default WordToggler;
