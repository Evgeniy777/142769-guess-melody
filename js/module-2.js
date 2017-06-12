import {getElementFromTemplate} from './create-dom-element';
import {showScreen} from './show-screen';
import mainLevelGenre from './module-3';

export default (data) => {

  const mainLevel = `
  <!-- Выбор исполнителя: уровень -->
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${data.timer.min}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${data.timer.sec}</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${data.game.guessArtist.text}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
      ${[...data.game.guessArtist.options.entries()].map((option) => {
        let opt = option.splice(1, 1)[0];
        return `<div class="main-answer-wrapper">
                <input class="main-answer-r" type="radio" id="answer-${opt.id}" name="answer" value="val-${opt.id}" />
                <label class="main-answer" for="answer-${opt.id}">
                  <img class="main-answer-preview" src="${opt.srcImg}">
                  ${opt.text}
                </label>
              </div>`;
      }).join(``)}
      </form>
    </div>
  </section>`;

  const moduleTwoElement = getElementFromTemplate(mainLevel);
  const answers = moduleTwoElement.querySelectorAll(`.main-answer`);

  Array.from(answers).forEach((answer) => {
    answer.onclick = () => {
      showScreen(mainLevelGenre(data));
    };
  });

  return moduleTwoElement;
};
