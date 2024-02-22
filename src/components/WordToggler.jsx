import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
const waitingWorld = 'Pass phone to the next player';

const WordToggler = ({ to, wordSeen, textOnCard }) => {
  const [isWordVisible, setIsWordVisible] = useState(false);
  const { word, isMafia } = useGame();
  const handleMouseDown = () => {
    if (to) return;
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
          {isWordVisible ? (
            <p>{isMafia() ? 'mafia' : word}</p>
          ) : (
            <p>{textOnCard}</p>
          )}
        </div>
      )}
    </Box>
  );
};

export default WordToggler;
