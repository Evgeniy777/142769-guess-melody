import {setQuestionToAsk} from '../engine/setQuestionToAsk';
import {setGameScreen} from '../engine/setGameScreen';
import {gameQuestions} from '../data/gameQuestions';
import {showScreen} from '../engine/show-screen';

export const setNextLevel = (gameState, gameResult) => {
  const newState = Object.assign({}, gameState);
  const nextQuestion = setQuestionToAsk(gameQuestions, newState.questionIndex);
  const nextGameScreen = setGameScreen(nextQuestion, newState);
  showScreen(nextGameScreen);

  return newState;
};
