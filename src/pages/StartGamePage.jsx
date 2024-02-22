import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useGame } from '../contexts/GameContext';

const StartGamePage = () => {
  const {
    startGame,
    numPlayers: playerInit,
    word,
    numMafia: mafiaInit,
  } = useGame();

  const [numPlayers, setNumPlayers] = useState(playerInit);
  const [wordToGuess, setWordToGuess] = useState(word);
  const [numMafia, setNumMafia] = useState(mafiaInit);

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
        InputProps={{ inputProps: { min: 1, max: numPlayers - 1 } }}
        value={numMafia}
        onChange={(e) => setNumMafia(e.target.value)}
      />
      <TextField
        label="Word to Guess"
        type="text"
        value={wordToGuess}
        required
        onChange={(e) => setWordToGuess(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Start Game
      </Button>
    </Box>
  );
};

export default StartGamePage;
