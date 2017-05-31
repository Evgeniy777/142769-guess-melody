import mainWelcome from './module-3';
import mainLevelArtist from './module-4';
import mainLevelGenre from './module-1';
import mainResultWin from './module-2';
import mainResultFail from './module-5';
import {showScreen} from './show-screen';
// import {getElementFromTemplate} from './create-dom-element';

showScreen(mainWelcome);

console.log(mainWelcome);
console.log(mainLevelArtist);
console.log(mainLevelGenre);
console.log(mainResultWin);
console.log(mainResultFail);

let playButton = document.querySelector(`.main-play`);

playButton.onclick = (evt) => {
  showScreen(mainLevelArtist);
};

