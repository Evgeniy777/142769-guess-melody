import AbstractView from '../../view';
import {initialState} from '../../data/initialState';

export default class Welcome extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<!-- Приветствие -->
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию">
        <h1>Угадай мелодию</h1>
      </section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br/>Удачи!</p>
    </section>`;
  }

  bind() {
    const playButton = this.element.querySelector(`.main-play`);
    playButton.addEventListener(`click`, () => {
      this.onStartGame();
    });
  }

  onStartGame() {}
}
