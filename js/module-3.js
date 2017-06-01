import {getElementFromTemplate} from './create-dom-element';
import {showScreen} from './show-screen';
import mainResultWin from './module-4';
import mainResultFail from './module-5';

const mainLevelGenre = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

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
  const resultScreens = [mainResultWin, mainResultFail];
  const getRandomResult = () => resultScreens[Math.floor(Math.random() * resultScreens.length)];
  const randomResult = (result = getRandomResult()) => showScreen(result);
  randomResult();
};

export default moduleThreeElement;
