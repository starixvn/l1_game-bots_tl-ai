module.exports = {
  skipDatabase: true,
  database: {
    url: "mongodb://0.0.0.0:27017",
    options: {
      dbName: "minigame",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
