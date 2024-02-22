import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
const waitingWorld = 'Pass phone to the next player';

const WordToggler = ({ to, wordSeen, textOnCard }) => {
  const [isWordVisible, setIsWordVisible] = useState(false);

  const handleMouseDown = () => {
    setIsWordVisible(true);
    wordSeen();
  };

  const handleMouseUp = () => {
    setIsWordVisible(false);
  };

  return (
    <Box
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      {to ? (
        <Typography>{waitingWorld}</Typography>
      ) : (
        <div style={{ userSelect: 'none' }}>
          {isWordVisible ? <p>{'word'}</p> : <p>{textOnCard}</p>}
        </div>
      )}
    </Box>
  );
};

export default WordToggler;
