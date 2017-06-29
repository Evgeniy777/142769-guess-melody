import Timer from './timer-view';
import {showGameScreen} from '../../engine/showGameScreen';

export default (state, container) => {
  const timer = new Timer(state);
  container.appendChild(timer.element);

  timer.finishGame = () => {
    showGameScreen(state);
  };

  return timer;
};
