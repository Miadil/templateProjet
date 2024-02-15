const express = require("express");
// http://localhost:4242/api/characters

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const charactersControllers = require("./controllers/charactersControllers");
// const moviesControllers = require("./controllers/moviesControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */
router.get("/characters", charactersControllers.browse);

module.exports = router;
