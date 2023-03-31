const { BotLogModel } = require("../models/tl-botlogs");
const { PlayerLogModel } = require("../models/tl-playerlogs");

const insertLog = function (req, res) {
  const { initCards, turns, result, code, hasPlayer } = req.body;
  const log = hasPlayer
    ? new PlayerLogModel({
        code,
        initCards: {
          player: initCards.bot1,
          bot1: initCards.bot2,
          bot2: initCards.bot3,
          bot3: initCards.bot4,
        },
        turns,
        result: {
          player: result.bot1,
          bot1: result.bot2,
          bot2: result.bot3,
          bot3: result.bot4,
        },
        date: Date.now(),
      })
    : new BotLogModel({
        code,
        initCards,
        turns,
        result,
        date: Date.now(),
      });
  try {
    log.save();
    res.status(200).send("success");
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getLogs = async function (req, res) {
  const { limitRound, code, hasPlayer } = req.query;
  const filter = code ? { code } : {};
  const projection = "-_id initCards turns result";
  const model = hasPlayer ? PlayerLogModel : BotLogModel;
  const logs = await model
    .find(filter, projection)
    .sort({ date: -1 })
    .limit(limitRound)
    .exec();
  res.status(200).json(logs);
};

module.exports = {
  insertLog,
  getLogs,
};
