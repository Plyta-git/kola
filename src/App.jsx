import GuessWordPage from './pages/GuessWordPage/GuessWordPage.jsx';
import StartGamePage from './pages/StartGamePage.jsx';
import { useGame } from './contexts/GameContext';

const App = () => {
  const { isGameStarted } = useGame();
  console.log(isGameStarted);
  return isGameStarted ? <GuessWordPage /> : <StartGamePage />;
};

export default App;
