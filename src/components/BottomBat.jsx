import { Button } from '@mui/material';

const BottomBar = ({ handleNextPlayer, isNextPlayerButtonDisabled }) => {
  return (
    <Button
      disabled={isNextPlayerButtonDisabled}
      onClick={handleNextPlayer}
      variant="contained"
      color="primary"
    >
      Next player
    </Button>
  );
};

export default BottomBar;
