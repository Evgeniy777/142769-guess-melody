import Welcome from './welcome-screen-view';
import {initialState} from '../../data/initialState';
import {showGameScreen} from '../../engine/showGameScreen';
import {setTimer} from '../../engine/setTimer';
import {getTime} from '../../engine/getTime';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    const state = Object.assign({}, initialState);
    showGameScreen(state);
    setTimer(state);
    getTime();
  };

  return welcome;
};
