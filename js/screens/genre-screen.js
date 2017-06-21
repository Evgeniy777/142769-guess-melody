import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import mainResultWin from '../screens/win-screen';
import mainResultFail from '../screens/fail-screen';

export default (data) => {
  const mainLevelGenre = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
    <h2 class="title">${data.game.guessSong.text}</h2>
    <form class="genre">
      ${[...data.game.guessSong.options.entries()].map((option) => {
        let opt = option.splice(1, 1)[0];
        return `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-${opt.id}">
        <label class="genre-answer-check" for="a-${opt.id}"></label>
      </div>`;
      }).join(``)}

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

  const moduleThreeElement = getElementFromTemplate(mainLevelGenre);
  const sendAnswer = moduleThreeElement.querySelector(`.genre-answer-send`);
  sendAnswer.setAttribute(`disabled`, `disabled`);

  const genreFrom = moduleThreeElement.querySelector(`.genre`);
  const answers = genreFrom.querySelectorAll(`input[name="answer"`);

  genreFrom.addEventListener((`change`), () => {
    let selectedAnswersCount = 0;
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      if (answer.checked) {
        selectedAnswersCount++;
      }
    }
    if (selectedAnswersCount > 0) {
      sendAnswer.removeAttribute(`disabled`);
    } else {
      sendAnswer.setAttribute(`disabled`, `disabled`);
    }
  });

  sendAnswer.onclick = () => {
    const resultScreens = [mainResultWin(data), mainResultFail(data)];
    const getRandomResult = () => resultScreens[Math.floor(Math.random() * resultScreens.length)];
    const randomResult = (result = getRandomResult()) => showScreen(result);
    randomResult();
  };

  return moduleThreeElement;
};
