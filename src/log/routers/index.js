const LogModel = require("../models/tl-logs");

const insertLog = function (req, res) {
  const { initCards, turns, result } = req.body;
  const log = new LogModel({ initCards, turns, result, date: Date.now() });
  try {
    log.save();
    res.status(200).send("success");
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getLogs = async function (req, res) {
  const { limitRound } = req.query;
  const logs = await LogModel.find({}, "-_id initCards turns result")
    .sort({ date: -1 })
    .limit(limitRound)
    .exec();
  res.status(200).json(logs);
};

module.exports = {
  insertLog,
  getLogs,
};
