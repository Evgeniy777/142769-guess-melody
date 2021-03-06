import AbstractView from '../../view.js';
import initializePlayer from '../../player';

export default class LevelArtist extends AbstractView {
  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions.quests;
    this.question = this.questions[this.state.questionIndex];
  }

  get template() {
    return `<section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.question.question}</h2>
          <div class="player-wrapper" src="${this.question.src}"></div>
          <form class="main-list">
            ${this.question.answers.map((answer) => `
              <div class="main-answer-wrapper">
                <input class="main-answer-r" type="radio" id="answer-${answer.title}" name="answer" value="${answer.isCorrect}" />
                <label class="main-answer" for="answer-${answer.title}">
                  <img class="main-answer-preview" src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
                  ${answer.title}
                </label>
              </div>
            `).join(``)}
          </form>
        </div>
      </section>`;
  }

  bind() {
    const answers = this.element.querySelectorAll(`.main-list [name="answer"]`);
    const player = this.element.querySelector(`.player-wrapper`);
    const removePlayer = initializePlayer(player, this.question.src, true);

    Array.from(answers).forEach((answer) => {
      answer.onclick = (e) => {
        const answerIndex = Array.from(answers).indexOf(e.target);
        this.onAnswer(this.question.type, answerIndex);
        removePlayer();
      };
    });
  }

  onAnswer() {

  }
}
