import { useState } from "react";
import WordToggler from "./components/WordToggler.jsx";
import { Box } from "@mui/material";
import BottomBar from "./components/BottomBat.jsx";

const App = () => {
  const [isWordVisible, setIsWordVisible] = useState(false);
  const [to, setTo] = useState(false);
  const [playerIndex, setPlayerIndex] = useState(0);
  const colors = [
    "#8cb369",
    "#f4e285",
    "#f4a259",
    "#198ce0",
    "#5b8e7d",
    "#bc4b51",
  ];
  const waitingWorld = "Pass phone to the next player";
  const nextPlayer = () => {
    setTo(true);
    setTimeout(() => {
      setTo(false);
    }, 3000);
    setPlayerIndex((index) => index + 1);
  };
  const getColor = (index) => {
    return colors[index % colors.length];
  };

  return (
    <>
      {playerIndex}

      <Box
        onTouchStart={() => setIsWordVisible(true)}
        onTouchEnd={() => setIsWordVisible(false)}
        onMouseDown={() => setIsWordVisible(true)}
        onMouseUp={() => setIsWordVisible(false)}
        sx={{
          height: "80vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: to ? 'black' : getColor(playerIndex)
        }}
      >
        {to ? (
          waitingWorld
        ) : (
          <WordToggler isWordVisible={isWordVisible} word="Hello" />
        )}
      </Box>

      <BottomBar incrementPlayerIndex={nextPlayer} />
    </>
  );
};

export default App;
