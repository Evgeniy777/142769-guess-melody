import ResultWin from './win-screen-view';
import {startNewGame} from '../../engine/tools';

export default (state) => {
  const resultWin = new ResultWin(state);

  resultWin.onClick = () => {
    startNewGame();
  };

  return resultWin;
};
