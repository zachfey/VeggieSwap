var db = require("../models");

module.exports = function (app) {
  // Load index page
  var testObject = {
    deal1: {
      offered: 'Potato',
      offeredQTY: 5,
      asked: 'Tomato',
      askedQTY: 1,
      status: 'open',
      userID: 123,
      created: '2019-05-18 00:02:40',
      updated: '2019-05-18 00:20:30'
    },
    deal2: {
      offered: 'Cherries',
      offeredQTY: 2,
      asked: 'Oranges',
      askedQTY: 10,
      status: 'pending',
      userID: 124,
      created: '2019-05-18 00:12:10',
      updated: '2019-05-18 00:13:05'
    }
  }

  app.get("/", function (req, res) {

    db.Deal.findAll({}).then(function (results) {
      // console.log(results)
      res.render("index2", { deals: results })

    });
  });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function (req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  //   // Render 404 page for any unmatched routes
  //   app.get("*", function (req, res) {
  //     res.render("404");
  //   });
};
