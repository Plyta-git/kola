import React, { useState } from "react";

const WordToggler = ({ word,isWordVisible }) => {
  return (
    <div style={{ userSelect: 'none' }}>
      {isWordVisible ? <p>{word}</p> : <p>HIDDEN</p>}
    </div>
  );
};

export default WordToggler;
