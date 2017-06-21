import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import mainWelcome from '../screens/welcome-screen';

export default (data) => {

  const mainResultWin = `
  <!-- Результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию">
          <h1>Угадай мелодию</h1>
        </section>

    <h2 class="title">${data.game.result.type.win}</h2>
    <div class="main-stat">За&nbsp;${data.game.result.time}&nbsp;минуты<br>вы&nbsp;отгадали ${data.game.result.scores}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.game.result.ratio}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const moduleFourElement = getElementFromTemplate(mainResultWin);
  const newGame = moduleFourElement.querySelector(`.main-replay`);

  newGame.onclick = () => {
    showScreen(mainWelcome(data));
  };

  return moduleFourElement;
};
