export const showNextScreen = (state) => {
  const newState = Object.assign({}, gameState);
  const levelType = state.levels[state.level].type;
  const level = getScreen(levelType);

  const endOfGame = isEndOfGame(state);
  const isEnd = endOfGame[0];

  if (isEnd) {
    const endType = endOfGame[1];

    if (endType === `endLives`) {
      endGame();
    } else if (endType === `endQuests`) {
      winGame(state);
    }
  } else {
    showScreen(level(setNextLevel(state)));
  }
};
