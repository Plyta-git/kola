import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const [numPlayers, setNumPlayers] = useState(3);
  const [numMafia, setNumMafia] = useState(1);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [mafiaIds, setMafiaIds] = useState([]);

  const generateMafiaIds = (numMafia, numPlayers) => {
    const newMafiaIds = [];
    while (newMafiaIds.length < numMafia) {
      const random = Math.floor(Math.random() * numPlayers);
      if (!newMafiaIds.includes(random) && random !== 0) {
        newMafiaIds.push(random);
      }
    }
    console.log(newMafiaIds.sort());
    setMafiaIds(newMafiaIds);
  };

  const incrementCurrentPlayerIndex = () => {
    setCurrentPlayerIndex((prev) => prev + 1);
    if (currentPlayerIndex >= numPlayers - 1) {
      setIsGameStarted(false);
    }
  };

  const startGame = (word, numPlayers, numMafia) => {
    setWord(word);
    setNumPlayers(numPlayers);
    setNumMafia(numMafia);
    generateMafiaIds(numMafia, numPlayers);
    setCurrentPlayerIndex(0);
    setIsGameStarted(true);
  };

  const isMafia = () => {
    return mafiaIds.includes(currentPlayerIndex);
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
        isMafia,
        numMafia,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
