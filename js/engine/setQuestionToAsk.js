//Функция принимает на вход массив вопросов и номер вопроса
//Возвращает объект с вопросом

export const setQuestionToAsk = (gameQuestions, questionIndex) => {
  const questionToAsk = gameQuestions[questionIndex];
  return questionToAsk;
};
