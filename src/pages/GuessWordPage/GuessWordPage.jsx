import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getColor } from './utils';
import WordToggle from '../../components/WordToggler';
import BottomBar from '../../components/BottomBat';
import { useGame } from '../../contexts/GameContext';

const GuessWordPage = () => {
  const [to, setTo] = useState(false);
  const [didPlayerSawWord, setDidPlayerSawWord] = useState(false);
  const { incrementCurrentPlayerIndex, currentPlayerIndex } = useGame();
  const textOnCard = didPlayerSawWord
    ? 'want to see the word again?'
    : 'hold me to see the word';
  const handleNextPlayer = () => {
    setDidPlayerSawWord(false);
    incrementCurrentPlayerIndex();
    setTo(true);
    setTimeout(() => {
      setTo(false);
    }, 3000);
  };

  const isNextPlayerButtonDisabled = to || !didPlayerSawWord;

  return (
    <Box
      sx={{
        opacity: didPlayerSawWord ? 1 : 0.8,
        backgroundColor: to ? 'black' : getColor(currentPlayerIndex),
        height: '80vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {!to && <Typography>Player: {currentPlayerIndex}</Typography>}
      <WordToggle
        textOnCard={textOnCard}
        to={to}
        wordSeen={() => setDidPlayerSawWord(true)}
      />
      <BottomBar
        isNextPlayerButtonDisabled={isNextPlayerButtonDisabled}
        handleNextPlayer={handleNextPlayer}
      />
    </Box>
  );
};

export default GuessWordPage;
