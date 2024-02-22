import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const [numPlayers, setNumPlayers] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [mafiaIds, setMafiaIds] = useState([]);

  const generateMafiaIds = (numMafia, numPlayers) => {
    const newMafiaIds = [];
    while (newMafiaIds.length < numMafia) {
      const random = Math.floor(Math.random() * numPlayers);
      if (!newMafiaIds.includes(random)) {
        newMafiaIds.push(random);
      }
    }
    console.log(newMafiaIds.sort());
    setMafiaIds(newMafiaIds);
  };

  const incrementCurrentPlayerIndex = () => {
    if (currentPlayerIndex >= numPlayers) {
      setIsGameStarted(false);
    }
    setCurrentPlayerIndex((prev) => prev + 1);
  };

  const startGame = (word, numPlayers, numMafia) => {
    setWord(word);
    incrementCurrentPlayerIndex();
    setNumPlayers(numPlayers);
    setIsGameStarted(true);
    generateMafiaIds(numMafia, numPlayers);
  };

  return (
    <GameContext.Provider
      value={{
        mafiaIds,
        incrementCurrentPlayerIndex,
        isGameStarted,
        word,
        numPlayers,
        currentPlayerIndex,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
