const ArcadeGame = require("../models/arcadeGame");
const mongoose = require("mongoose");

exports.index = (req, res) => {
  ArcadeGame.find()
    .then(arcadeGames => {
      res.render("arcadeGames/index", {
        arcadeGames: arcadeGames,
        title: "Archive"
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.show = (req, res) => {
  ArcadeGame.findById(req.params.id)
    .then(arcadeGame => {
      res.render("arcadeGames/show", {
        arcadeGame: arcadeGame,
        title: arcadeGame.title
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.new = (req, res) => {
  res.render("arcadeGames/new", {
    title: `New Arcade Game`
  });
};

exports.edit = (req, res) => {
  ArcadeGame.findById(req.params.id)
    .then(arcadeGame => {
      res.render("arcadeGames/edit", {
        title: `Edit ${arcadeGame.title}`,
        arcadeGame: arcadeGame
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/");
    });
};

exports.create = (req, res) => {
  ArcadeGame.create(req.body.arcadeGame)
    .then(() => {
      req.flash("success", "New arcade game was created successfully.");
      res.redirect("/arcadeGames");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/arcadeGames/new");
    });
};

exports.update = (req, res) => {
  ArcadeGame.updateOne(
    {
      _id: req.body.id
    },
    req.body.arcadeGame,
    {
      runValidators: true
    }
  )
    .then(() => {
      req.flash("success", "The arcade game was updated successfully.");
      res.redirect(`/arcadeGames/${req.body.id}`);
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/arcadeGames/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  ArcadeGame.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      req.flash("success", "The arcade game was deleted successfully.");
      res.redirect("/arcadeGames");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/arcadeGames`);
    });
};
