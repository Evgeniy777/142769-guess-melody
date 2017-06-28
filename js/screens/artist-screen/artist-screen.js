import LevelArtist from '../artist-screen/artist-screen-view';
import {checkArtist} from '../../engine/checkArtist';
import {checkGameResult} from '../../engine/checkGameResult';
import {showGameScreen} from '../../engine/showGameScreen';

export default (state, question) => {
  const levelArtist = new LevelArtist(state, question);

  levelArtist.onClick = (e, state, question, answers) => {
    const answerIndex = Array.from(answers).indexOf(e.target) + 1;
    const gameResult = checkArtist(question, answerIndex);
    const gameState = checkGameResult(gameResult, state);
    showGameScreen(gameState);
  };

  return levelArtist;
};
