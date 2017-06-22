export const initialState = Object.freeze({
  remainingTime: 120,
  lives: 3,
  scores: 0,
  questionIndex: 0
});

export const setRemainingTime = (gameState, value) => {
  const state = Object.assign({}, gameState);

  if (value > 0) {
    state.remainingTime = value;
  }

  return state;
};

export const setLives = (gameState, value) => {
  const state = Object.assign({}, gameState);

  if (value > 0) {
    state.lives = value;
  }

  return state;
};

export const setQuestionIndex = (gameState, value) => {
  const state = Object.assign({}, gameState);

  if (value > 0) {
    state.questionIndex = value;
  }

  return state;
};

export const setNextQuestion = (questions, questionIndex) =>{
  if (questions.length >= questionIndex) {
    return questions.slice(questionIndex, 1);
  }
};

export const checkGenres = (question) => {
  const correctGenre = question.genre;
  const options = question.options;
  const correctOptions = [];
  options.find((option) => {
    if(option.genre == correctGenre) {
      correctOptions.push(option.id);
    }
  });
  correctOptions.find((optionId) => {
    const inputs = document.querySelectorAll(`.genre-answer #a-${optionId}`);
    inputs.find((input) => {
      if (input.checked) {
        return true;
      }
    });
  });
  
};
