import {getElementFromTemplate} from './engine/create-dom-element';
import {showScreen} from './engine/show-screen';
import mainLevelArtist from './screens/artist-screen';
import {headLogoTemplate} from './data/header';

export default (data) => {

  const mainWelcome = `
  <!-- Приветствие -->
  <section class="main main--welcome">
    ${headLogoTemplate}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${data.game.rules.title}</h2>
    <p class="text main-text">${data.game.rules.text}</p>
  </section>`;

  const moduleOneElement = getElementFromTemplate(mainWelcome);

  let playButton = moduleOneElement.querySelector(`.main-play`);

  playButton.onclick = () => {
    showScreen(mainLevelArtist(data));
  };

  return moduleOneElement;
};
