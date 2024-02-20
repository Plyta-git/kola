import { useState } from "react";
import WordToggler from "./components/WordToggler.jsx";
import { Box, Typography } from "@mui/material";
import BottomBar from "./components/BottomBat.jsx";

const App = () => {
  const [isWordVisible, setIsWordVisible] = useState(false);
  const [to, setTo] = useState(false);
  const [didPlayerSawWord, setDidPlayerSawWord] = useState(false)
  const [playerIndex, setPlayerIndex] = useState(0);
  const colors = [
    "#8cb36955",
    "#f4e28555",
    "#f4a25955",
    "#198ce055",
    "#5b8e7d55",
    "#bc4b5155",
  ];
  const waitingWorld = "Pass phone to the next player";
  const nextPlayer = () => {
    setDidPlayerSawWord(false)
    setTo(true);
    setTimeout(() => {
      setTo(false);
    }, 1000);
    setPlayerIndex((index) => index + 1);
  };
  const getColor = (index) => {
    return colors[index % colors.length];
  };

  const isNextButtonDisabled = to || !didPlayerSawWord
  return (
    <>
      <Typography>
      Player: {playerIndex}
      </Typography>

      <Box
        onTouchStart={() => {setIsWordVisible(true); setDidPlayerSawWord(true)}}
        onTouchEnd={() => setIsWordVisible(false)}
        onMouseDown={() => {setIsWordVisible(true); setDidPlayerSawWord(true)}}
        onMouseUp={() => setIsWordVisible(false)}
        sx={{
          height: "70vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0",
          backgroundColor: to ? 'black' : getColor(playerIndex)
        }}
      >
        {to ? (
          waitingWorld
        ) : (
          <WordToggler isWordVisible={isWordVisible} word="Hello" />
        )}
      </Box>

      <BottomBar isNextButtonDisabled={isNextButtonDisabled} incrementPlayerIndex={nextPlayer} />
    </>
  );
};

export default App;
