/**
 * Created by Cannibal on 31.05.2017.
 */
import {getElementFromTemplate} from './create-dom-element';

const mainResultFail = `
  <!-- Неудачный результат игры -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const moduleFiveElement = getElementFromTemplate(mainResultFail);
export default moduleFiveElement;
