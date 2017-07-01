import ResultLose from './fail-screen-view';
import {startNewGame} from '../../engine/tools';

export default (state) => {
  const resultLose = new ResultLose(state);

  resultLose.onClick = () => startNewGame();

  return resultLose;
};
