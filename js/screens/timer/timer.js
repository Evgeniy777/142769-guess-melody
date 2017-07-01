import Timer from './timer-view';
import {showGameScreen} from '../../engine/showGameScreen';
import {initialState} from '../../data/initialState';

export default (state, container) => {
  const timer = new Timer(state);
  if (container) {
    container.appendChild(timer.element);
  }

  timer.finishGame = (obj) => {
    const newState = Object.assign({}, obj.state);
    // newState.remainingTime = obj.time;
    // newState.time = initialState.time;
    // console.log(`finishGame`);
    // showGameScreen(newState);
  };

  return timer;
};
