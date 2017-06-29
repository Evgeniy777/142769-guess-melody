import AbstractView from '../../view.js';
import {gameQuestions} from '../../data/gameQuestions';

export default class LevelArtist extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.question = gameQuestions[this.state.questionIndex];
  }

  get template() {
    return `<!-- Выбор исполнителя: уровень -->
    <section class="main main--level main--level-artist">
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
        const answerIndex = Array.from(answers).indexOf(e.target) + 1;
        const obj = this;
        this.onClick(obj, answerIndex);
      };
    });

  }
}
