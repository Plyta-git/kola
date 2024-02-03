import { Button } from "@mui/material";

const BottomBar = ({incrementPlayerIndex}) => {
  return (
    <Button onClick={incrementPlayerIndex} variant="contained" color="primary">
      Next player
    </Button>
  );
};

export default BottomBar;
