import AbstractView from '../../view';
import {formatSecondsToTime} from '../../engine/formatSecondsToTime';

export default class Results extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    const time = formatSecondsToTime(this.state.time);
    const content = {
      win: {
        title: `Вы настоящий меломан!`,
        summary: (state) => `За&nbsp;${time}<br>вы&nbsp;отгадали ${this.state.answers}&nbsp;мелодии`,
        ratio: (state) => `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.state.ratio}%&nbsp;игроков</span>`
      },
      fail: {
        title: `Вы проиграли`,
        summary: () => `Ничего, вам повезет в следующий раз`,
        ratio: () => ``
      }
    };

    const result = content[this.state.result];

    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${result.title}</h2>
      <div class="main-stat">${result.summary(this.state)}</div>
      ${result.ratio(this.ratio)}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
    `;
  }

  bind() {
    const newGame = this.element.querySelector(`.main-replay`);

    newGame.addEventListener(`click`, () => {
      this.onStartNewGame();
    });
  }

  onStartNewGame() {

  }
}
