import LevelGenre from './genre-screen-view';
import {checkGenres} from '../../engine/checkGenres';
import {checkGameResult} from '../../engine/checkGameResult';
import {showGameScreen} from '../../engine/showGameScreen';

export default (state) => {
  const levelGenre = new LevelGenre(state);

  levelGenre.onClick = (obj, checkedAnswers) => {
    const gameResult = checkGenres(checkedAnswers, obj.question);
    const gameState = checkGameResult(gameResult, obj.state);
    showGameScreen(gameState);
  };

  return levelGenre;
};
