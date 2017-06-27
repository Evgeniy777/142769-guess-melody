import AbstractView from '../../view';

export default class ResultWin extends AbstractView {
  constructor(state) {
    super();

    this.state = state;
  }

  get template() {
    return `<!-- Результат игры -->
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию">
        <h1>Угадай мелодию</h1>
      </section>  
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${this.state.remainingTime}&nbsp;минуты<br>вы&nbsp;отгадали ${this.state.answers}&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.state.ratio}%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const newGame = document.querySelector(`.main-replay`);

    newGame.addEventListener(`click`, () => {
      this.onClick();
    });
  }
}
