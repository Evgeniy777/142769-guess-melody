import {showScreen} from './engine/show-screen';
import mainWelcome from './screens/welcome-screen';
import data from './data/game';

console.log(showScreen);
console.log(data);

showScreen(mainWelcome(data));
