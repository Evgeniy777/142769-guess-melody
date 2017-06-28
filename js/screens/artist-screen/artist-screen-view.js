import AbstractView from '../../view.js';
import {gameQuestions} from '../../data/gameQuestions';
import game from '../../data/game';

export default class LevelArtist extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.question = gameQuestions[this.state.questionIndex];
  }

  get template() {
    return `<!-- Выбор исполнителя: уровень -->
    <section class="main main--level main--level-artist">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
  
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${game.timer.min}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${game.timer.sec}</span>
        </div>
      </svg>
  
      <div class="main-wrap">
        <div class="main-timer"></div>
  
        <h2 class="title main-title">Кто исполняет это песню?</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${[...this.question.options.entries()].map((option) => {
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
  }

  bind() {
    const answers = this.element.querySelectorAll(`.main-list [name="answer"]`);

    Array.from(answers).forEach((answer) => {
      answer.onclick = (e) => {
        this.onClick(e, this.state, this.question, answers);
      };
    });

  }
}
