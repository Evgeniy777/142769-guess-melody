import Welcome from './welcome-screen-view';
import {initialState} from '../../data/initialState';

export default () => {
  const welcome = new Welcome();

  welcome.onClick = () => {
    alert('click');
    console.log(initialState);
  };

  return welcome;
};
