import LevelArtist from '../artist-screen/artist-screen-view';
import {checkArtist} from '../../engine/checkArtist';
import {checkGameResult} from '../../engine/checkGameResult';
import {showGameScreen} from '../../engine/showGameScreen';
import {setTimer} from '../../engine/setTimer';

export default (state, question) => {
  const levelArtist = new LevelArtist(state, question);

  levelArtist.onClick = (obj, answerIndex) => {
    const gameResult = checkArtist(obj.question, answerIndex);
    const gameState = checkGameResult(gameResult, state);
    showGameScreen(gameState);
    setTimer(gameState);

    console.log(state);
    console.log(obj.state);
  };

  return levelArtist;
};
