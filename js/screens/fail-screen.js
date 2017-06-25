import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import {setQuestionToAsk} from '../engine/setQuestionToAsk';
import {setGameScreen} from '../engine/setGameScreen';
import {gameQuestions} from '../data/gameQuestions';
import {initialState} from '../data/initialState';

export default (state, game) => {

  const mainResultFail = `
  <!-- Неудачный результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>

    <h2 class="title">${game.result.fail}</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const moduleFiveElement = getElementFromTemplate(mainResultFail);
  const newGame = moduleFiveElement.querySelector(`.main-replay`);

  newGame.onclick = () => {
    const newState = Object.assign({}, initialState);
    const questionToAsk = setQuestionToAsk(gameQuestions, newState.questionIndex);
    showScreen(setGameScreen(questionToAsk, newState));
  };

  return moduleFiveElement;
};
