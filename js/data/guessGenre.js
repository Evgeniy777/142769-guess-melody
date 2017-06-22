import {setRemainingTime} from './data/initialState';
import {setLives} from './data/initialState';
import {setScores} from './data/initialState';
import {setNextQuestion} from './data/initialState';
import {setQuestionIndex} from '../data/initialState';

export const guessGenreGame = (gameState, questions, gameData, userAnswer) => {
  const state = Object.assign({}, gameState);
  if (userAnswer == gameData.answer.correct) {
    setNextQuestion(questions, state.questionIndex++);
    setQuestionIndex(state, state.questionIndex++);
  } else {
    setLives(state, state.lives--);
  }

  return state;
};


