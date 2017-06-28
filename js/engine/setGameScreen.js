import levelArtist from '../screens/artist-screen/artist-screen';
import levelGenre from '../screens/genre-screen/genre-screen';
import resultWin from '../screens/win-screen/win-screen';
import resultFail from '../screens/fail-screen/fail-screen';
import welcome from '../screens/welcome-screen/welcome-screen';

export const setGameScreen = (gameScreen, state) => {
  switch (gameScreen) {
    case `artist`: {
      return levelArtist(state);
    }
    case `genre`: {
      return levelGenre(state);
    }
    case `win`: {
      return resultWin(state);
    }
    case `fail`: {
      return resultFail;
    }
    case `welcome`: {
      return welcome;
    }
    default: {
      throw new Error(`Ошибка`);
    }
  }
};
