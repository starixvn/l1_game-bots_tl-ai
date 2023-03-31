let roundData = {
  initCards: {},
  turns: [],
  result: {
    bot1: 4,
    bot2: 4,
    bot3: 4,
    bot4: 4,
  },
};
class Logger {
  static reset() {
    roundData = {
      initCards: {},
      turns: [],
      result: { bot1: 4, bot2: 4, bot3: 4, bot4: 4 },
    };
  }

  static insertLog(code = "", hasPlayer = false) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...roundData, code, hasPlayer }),
    };
    return fetch("/log", options)
      .then(() => this.reset())
      .catch((err) => {
        this.reset();
        alert(err);
      });
  }

  static logInitCards(bot1, bot2, bot3, bot4) {
    roundData.initCards = {
      bot1: chuyen_bai(bot1),
      bot2: chuyen_bai(bot2),
      bot3: chuyen_bai(bot3),
      bot4: chuyen_bai(bot4),
    };
  }
  static logWinner(winners) {
    if (winners.length === 1) {
      roundData.result[`bot${+winners[0] + 1}`] = 1;
    } else {
      const handIds = ["0", "1", "2", "3"];
      const loser = handIds.find((id) => !winners.includes(id));
      const winner = [...winners];
      winner.push(loser);
      roundData.result = winner.reduce(
        (result, handId, index) => {
          result[`bot${+handId + 1}`] = index + 1;
          return result;
        },
        {
          bot1: 4,
          bot2: 4,
          bot3: 4,
          bot4: 4,
        }
      );
    }
  }

  static addTurn() {
    roundData.turns.push([]);
  }

  static logTurn(name, droppedCards, hand) {
    if (!roundData.turns[roundData.turns.length - 1]) {
      roundData.turns[roundData.turns.length - 1] = [];
    }
    roundData.turns[roundData.turns.length - 1].push({
      player: name,
      hand,
      play: droppedCards,
    });
  }
}
