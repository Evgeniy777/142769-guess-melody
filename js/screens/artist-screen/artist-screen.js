import LevelArtist from '../artist-screen/artist-screen-view';
import {startNewGame} from '../../engine/tools';

export default (state) => {
  const levelArtist = new LevelArtist(state);

  levelArtist.onClick = () => {
    startNewGame();
  };

  return levelArtist;
};
