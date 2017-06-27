import {setGameScreen} from '../engine/setGameScreen';
import {showScreen} from '../engine/show-screen';

export const startNewGame = () => {
  const welcome = setGameScreen(`welcome`);
  showScreen(welcome());
};
