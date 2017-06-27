import LevelArtist from '../screens/artist-screen/artist-screen';
import LevelGenre from '../screens/genre-screen/genre-screen';
import ResultWin from '../screens/win-screen/win-screen';
import ResultFail from '../screens/fail-screen/fail-screen';
import Welcome from '../screens/welcome-screen/welcome-screen';

export const setGameScreen = (gameScreen) => {
  switch (gameScreen) {
    case `artist`: {
      return LevelArtist;
    }
    case `genre`: {
      return LevelGenre;
    }
    case `win`: {
      return ResultWin;
    }
    case `fail`: {
      return ResultFail;
    }
    case `welcome`: {
      return Welcome;
    }
    default: {
      throw new Error(`Ошибка`);
    }
  }
};
