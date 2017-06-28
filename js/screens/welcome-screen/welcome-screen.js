import Welcome from './welcome-screen-view';
import {initialState} from '../../data/initialState';
import {showGameScreen} from '../../engine/showGameScreen';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    const state = Object.assign({}, initialState);
    showGameScreen(state);
  };

  return welcome;
};
