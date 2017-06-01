import {getElementFromTemplate} from './create-dom-element';
import {showScreen} from './show-screen';
import mainLevelArtist from './module-2';

const mainWelcome = `
  <!-- Приветствие -->
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

const moduleOneElement = getElementFromTemplate(mainWelcome);

let playButton = moduleOneElement.querySelector(`.main-play`);

playButton.onclick = () => {
  showScreen(mainLevelArtist);
};
export default moduleOneElement;
