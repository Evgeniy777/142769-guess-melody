import AbstractView from '../../view.js';
import game from '../../data/game';
import initializePlayer from '../../player';

export default class LevelGenre extends AbstractView {
  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions.quests;
    this.question = this.questions[this.state.questionIndex];
  }

  get template() {
    return `<section class="main main--level main--level-genre">
        <h2 class="title">${this.question.question}</h2>
        <form class="genre">
        ${this.question.answers.map((answer) => `
          <div class="genre-answer">
            <div class="player-wrapper" src="${answer.src}"></div>
            <input type="checkbox" name="answer" value="${answer.genre}" id="a-${answer.genre}">
            <label class="genre-answer-check" for="a-${answer.genre}"></label>
          </div>
        `).join(``)}
          <input class="genre-answer-send" type="submit" value="Ответить">
        </form>
      </section>`;
  }

  bind() {
    const sendAnswer = this.element.querySelector(`.genre-answer-send`);
    const inputs = this.element.querySelectorAll(`.genre-answer [name="answer"]`);
    const players = this.element.querySelectorAll(`.player-wrapper`);
    const audio = [];

    Array.from(players).forEach((player, index) => audio.push(initializePlayer(player, this.question.answers[index].src)));

    sendAnswer.onclick = (e) => {
      e.preventDefault();
      const checkedAnswers = [];
      inputs.forEach((input) => {
        if (input.checked) {
          checkedAnswers.push(game.answer.correct);
        } else {
          checkedAnswers.push(game.answer.wrong);
        }
      });
      audio.forEach((player) => {
        player();
      });
      this.onAnswer(this.question.type, checkedAnswers);
    };
  }

  onAnswer() {

  }
}
