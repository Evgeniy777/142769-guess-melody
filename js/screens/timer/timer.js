import Timer from './timer-view';
import {showGameScreen} from '../../engine/showGameScreen';

export default (state, container) => {

  const timer = new Timer(state);
  if (container) {
    container.appendChild(timer.element);
  }

  timer.finishGame = (obj) => {
    const newState = Object.assign({}, obj.state);
    showGameScreen(newState);
  };

  return timer;
};
