import Welcome from './welcome-screen-view';
import {initialState} from '../../data/initialState';
import {showGameScreen} from '../../engine/showGameScreen';
import timer from '../../screens/timer/timer';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    const state = Object.assign({}, initialState);
    showGameScreen(state);
    const timerContainer = document.querySelector(`.main-timer`);
    timer(state, timerContainer);
  };

  return welcome;
};
