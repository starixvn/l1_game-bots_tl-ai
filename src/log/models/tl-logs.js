const mongoose = require("mongoose");

const turnSchema = new mongoose.Schema(
  {
    player: { type: String, required: true },
    hand: { type: [String], required: true },
    play: { type: [String], required: true },
  },
  { _id: false }
);

const initCardsSchema = new mongoose.Schema(
  {
    bot1: { type: [String], required: true },
    bot2: { type: [String], required: true },
    bot3: { type: [String], required: true },
    bot4: { type: [String], required: true },
  },
  { _id: false }
);

const resultSchema = new mongoose.Schema(
  {
    bot1: { type: Number, required: true },
    bot2: { type: Number, required: true },
    bot3: { type: Number, required: true },
    bot4: { type: Number, required: true },
  },
  { _id: false }
);

const Schema = new mongoose.Schema({
  initCards: { type: initCardsSchema, required: true },
  turns: { type: [[turnSchema]] },
  result: { type: resultSchema, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("tl-logRound", Schema);
