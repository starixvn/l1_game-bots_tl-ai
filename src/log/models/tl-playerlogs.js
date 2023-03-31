const mongoose = require("mongoose");
const { turnSchema } = require("./tl-botlogs");

const initCardsSchema = new mongoose.Schema(
  {
    player: { type: [String], required: true },
    bot1: { type: [String], required: true },
    bot2: { type: [String], required: true },
    bot3: { type: [String], required: true },
  },
  { _id: false }
);

const resultSchema = new mongoose.Schema(
  {
    player: { type: Number, required: true },
    bot1: { type: Number, required: true },
    bot2: { type: Number, required: true },
    bot3: { type: Number, required: true },
  },
  { _id: false }
);

const Schema = new mongoose.Schema({
  code: { type: String, default: "", required: true },
  initCards: { type: initCardsSchema, required: true },
  turns: { type: [[turnSchema]] },
  result: { type: resultSchema, required: true },
  date: { type: Date, default: Date.now() },
});

const PlayerLogModel = mongoose.model("tl-playerLog", Schema);

module.exports = { PlayerLogModel };
