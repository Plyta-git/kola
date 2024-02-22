import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useGame } from '../contexts/GameContext';

const StartGamePage = () => {
  const [numPlayers, setNumPlayers] = useState(3);
  const [wordToGuess, setWordToGuess] = useState('');
  const [numMafia, setNumMafia] = useState(1);
  const { startGame } = useGame();

  const handleSubmit = (event) => {
    event.preventDefault();
    startGame(wordToGuess, numPlayers, numMafia);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <TextField
        label="Number of Players"
        type="number"
        InputProps={{ inputProps: { min: 3 } }}
        value={numPlayers}
        onChange={(e) => setNumPlayers(e.target.value)}
      />
      <TextField
        label="Number of Mafia"
        type="number"
        InputProps={{ inputProps: { max: numPlayers - 1 } }}
        value={numMafia}
        onChange={(e) => setNumMafia(e.target.value)}
      />
      <TextField
        label="Word to Guess"
        type="text"
        value={wordToGuess}
        onChange={(e) => setWordToGuess(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Start Game
      </Button>
    </Box>
  );
};

export default StartGamePage;
