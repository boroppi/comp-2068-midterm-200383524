// Our Express app module
const express = require("express");
const app = express();

// Importing the pageRoutes
const arcadeGamesRoutes = require("./routes/arcadeGames");

// Our home page
app.get("/", (req, res) => {
  res.render("pages/home");
});

// registering paageRoutes
app.use("/arcadeGames", arcadeGamesRoutes);

// Exporting the changes
module.exports = app;
