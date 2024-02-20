import { Button } from "@mui/material";

const BottomBar = ({isNextButtonDisabled, incrementPlayerIndex}) => {
  return (
    <Button disabled={isNextButtonDisabled} onClick={incrementPlayerIndex} variant="contained" color="primary">
      Next player
    </Button>
  );
};

export default BottomBar;
