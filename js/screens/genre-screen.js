import {getElementFromTemplate} from '../engine/create-dom-element';
import {showScreen} from '../engine/show-screen';
import mainResultWin from '../screens/win-screen';
import mainResultFail from '../screens/fail-screen';
import {checkGenres} from '../engine/checkGenres';
// import {guessGenre} from '../data/guessGenre';

export default (question) => {
  const mainLevelGenre = `
  <!-- Игра на выбор жанра -->
  <section class="main main--level main--level-genre">
    <h2 class="title">${question.text}</h2>
    <form class="genre">
      ${[...question.options.entries()].map((option) => {
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

  const moduleThreeElement = getElementFromTemplate(mainLevelGenre);
  const sendAnswer = moduleThreeElement.querySelector(`.genre-answer-send`);
  // sendAnswer.setAttribute(`disabled`, `disabled`);

  const genreForm = moduleThreeElement.querySelector(`.genre`);
  genreForm.addEventListener((`change`), () => {
    let result =  checkGenres(question);
    sendAnswer.onclick = () => {
      debugger;
      alert(result);
      // const resultScreens = [mainResultWin(data), mainResultFail(data)];
      // const getRandomResult = () => resultScreens[Math.floor(Math.random() * resultScreens.length)];
      // const randomResult = (result = getRandomResult()) => showScreen(result);
      // randomResult();
    };
  });

  return moduleThreeElement;
};
