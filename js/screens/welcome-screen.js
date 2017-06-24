import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import {setQuestionToAsk} from '../engine/setQuestionToAsk';
import {setGameScreen} from '../engine/setGameScreen';
import {gameQuestions} from '../data/gameQuestions';
import {initialState} from '../data/initialState';

export default (game) => {

  const mainWelcome = `
  <!-- Приветствие -->
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${game.rules.title}</h2>
    <p class="text main-text">${game.rules.text}</p>
  </section>`;

  const moduleOneElement = getElementFromTemplate(mainWelcome);

  let playButton = moduleOneElement.querySelector(`.main-play`);

  playButton.onclick = () => {
    const state = Object.assign({}, initialState);
    const questionToAsk = setQuestionToAsk(gameQuestions, state.questionIndex);
    console.log(questionToAsk);
    showScreen(setGameScreen(questionToAsk));
  };

  return moduleOneElement;
};
