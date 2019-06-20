// Our router module
const router = require("express").Router();

// Our controller
const arcadeGamesController = require("../controllers/arcadeGamesController");

// Our routes
router.get(`/`, arcadeGamesController.index);
router.get(`/new`, arcadeGamesController.new);

router.get(`/:id`, arcadeGamesController.show);
router.get(`/:id/edit`, arcadeGamesController.edit);
router.post(`/`, arcadeGamesController.create);
router.post(`/update`, arcadeGamesController.update);
router.post(`/destroy`, arcadeGamesController.destroy);

// We have to export our changes
module.exports = router;
