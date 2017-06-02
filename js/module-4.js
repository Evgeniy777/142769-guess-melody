import {getElementFromTemplate} from './create-dom-element';
import {showScreen} from './show-screen';
import mainWelcome from './module-1';

const mainResultWin = `
  <!-- Результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const moduleFourElement = getElementFromTemplate(mainResultWin);
const newGame = moduleFourElement.querySelector(`.main-replay`);

newGame.onclick = () => {
  showScreen(mainWelcome);
};

export default moduleFourElement;
