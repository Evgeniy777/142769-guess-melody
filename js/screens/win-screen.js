import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import mainWelcome from '../screens/welcome-screen';
import {calcStatistics} from '../engine/calcStatistics';
import {statistics} from '../data/statistics';


export default (state, game) => {
  calcStatistics(state, statistics);
  const mainResultWin = `
  <!-- Результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию">
          <h1>Угадай мелодию</h1>
        </section>

    <h2 class="title">${game.result.win}</h2>
    <div class="main-stat">За&nbsp;${state.remainingTime}&nbsp;минуты<br>вы&nbsp;отгадали ${state.answers}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${state.ratio}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const moduleFourElement = getElementFromTemplate(mainResultWin);
  const newGame = moduleFourElement.querySelector(`.main-replay`);

  newGame.onclick = () => {
    showScreen(mainWelcome(game));
  };

  return moduleFourElement;
};
