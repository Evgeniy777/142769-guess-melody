import LevelGenre from './genre-screen-view';
import {checkGenres} from '../../engine/checkGenres';
import {checkGameResult} from '../../engine/checkGameResult';
import {showGameScreen} from '../../engine/showGameScreen';

export default (state) => {
  const levelGenre = new LevelGenre(state);

  levelGenre.onClick = (checkedAnswers, state, question) => {
    const gameResult = checkGenres(checkedAnswers, question);
    const gameState = checkGameResult(gameResult, state);
    showGameScreen(gameState);
  };

  return levelGenre;
};
