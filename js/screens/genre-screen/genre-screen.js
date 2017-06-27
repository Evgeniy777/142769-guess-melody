import LevelGenre from './genre-screen-view';

export default (state) => {
  const levelGenre = new LevelGenre(state);

  levelGenre.onClick = (currentState, answer) => {

  };

  return levelGenre;
};
