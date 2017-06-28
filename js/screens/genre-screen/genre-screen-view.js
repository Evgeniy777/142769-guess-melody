import AbstractView from '../../view.js';
import {gameQuestions} from '../../data/gameQuestions';
import game from '../../data/game';

export default class LevelGenre extends AbstractView {
  constructor(state) {
    super();

    this.state = state;
    this.question = gameQuestions[this.state.questionIndex];
  }

  get template() {
    return `<!-- Игра на выбор жанра -->
    <section class="main main--level main--level-genre">
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${game.timer.min}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${game.timer.sec}</span>
      </div>
      <h2 class="title">${this.question.text}</h2>
      <form class="genre">
        ${[...this.question.options.entries()].map((option) => {
          let opt = option.splice(1, 1)[0];
          return `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-${opt.id}" id="a-${opt.id}">
            <label class="genre-answer-check" for="a-${opt.id}"></label>
          </div>`;
        }).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>`;
  }

  bind() {
    const sendAnswer = this.element.querySelector(`.genre-answer-send`);
    const inputs = this.element.querySelectorAll(`.genre-answer [name="answer"]`);

    sendAnswer.onclick = () => {
      const checkedAnswers = [];
      inputs.forEach((input) => {
        if (input.checked) {
          checkedAnswers.push(game.answer.correct);
        } else {
          checkedAnswers.push(game.answer.wrong);
        }
      });
      this.onClick(checkedAnswers, this.state, this.question);
    };
  }
}