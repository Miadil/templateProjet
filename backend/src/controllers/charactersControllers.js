// Import access to database tables
const models = require("../modelsProviders");

// The B of BREAD - Browse (Read All) operation
const browse = (req, res) => {
  // Fetch all items from the database
  models.characters
    .readAll()
    .then((characters) => res.json(characters))
    .catch((err) => console.error(err));
};

module.exports = {
  browse,
};
