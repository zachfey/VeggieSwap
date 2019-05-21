var db = require("../models");

module.exports = function (app) {
  //complete
  // Get all examples 
  app.get("/api/deals", function (req, res) {
    db.Post.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // ensure following format:
  // var newObj = {
  //   UserId: 1,
  //   offered: 'Potato',
  //   offeredQTY: 5,
  //   asked: 'Tomato',
  //   askedQTY: 1,
  //   status: 'open'
  // };
  app.post("/api/deals", function (req, res) {
    console.log(req.body);
    db.Deal.create(req.body).then(function (response) {
      res.json(response);
    });
  });

  // ensure following format:
  // var newObj = {
  //   username: "zachary",
  //   password: 'password',
  //   email: 'email'
  // }
  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function (response) {
      res.json(response);
    });
  });

  //incomplete
  // Delete an example by id
  app.delete("/api/delete/:id", function (req, res) {
    db.Deal.destroy({ where: { id: req.params.id } }).then(function (response) {
      res.json(response);
    });
  })
}
