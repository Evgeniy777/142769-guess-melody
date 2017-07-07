export default class Model {
  load() {
    return Model.getQuests()
      .then((quests) => {
        return Model.getStats()
          .then((stats) => {
            return {quests, stats};
          });
      });
  }

  static getQuests() {
    return window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`)
      .then((response) => response.json());
  }

  static getStats() {
    return window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/Evgeniy777`)
      .then((response) => response.json())
      .catch((reject) => []);
  }

  static send(data) {
    const body = JSON.stringify(data);

    return window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/Evgeniy777`, {
      body,
      method: `POST`,
      headers: {
        'Content-Type': `application/json`
      }
    });
  }
}
