import {getElementFromTemplate} from './create-dom-element';
import {showScreen} from './show-screen';
import mainWelcome from './module-1';
import headLogoTemplate from './header';

const mainResultFail = `
  <!-- Неудачный результат игры -->
  <section class="main main--result">` + headLogoTemplate + `
    
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const moduleFiveElement = getElementFromTemplate(mainResultFail);
const newGame = moduleFiveElement.querySelector(`.main-replay`);

newGame.onclick = () => {
  showScreen(mainWelcome);
};

export default moduleFiveElement;
