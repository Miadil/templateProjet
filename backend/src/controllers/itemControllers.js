// Import access to database tables
const models = require("../modelsProviders");

// The B of BREAD - Browse (Read All) operation
const browse = (req, res) => {
  // Fetch all items from the database
  models.item
    .findAll()
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
};

// The R of BREAD - Read operation
const read = async (req, res) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await models.item.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await models.item.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
