var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {

    db.Deal.findAll({}).then(function (results) {
      console.log(results)

      let openDeals = [];
      let pendingDeals = [];
      let closedDeals = [];

      for (let i in results) {
        if (results[i].status == 'open') {
          openDeals.push(results[i])
        } else if (results[i].status == 'pending') {
          pendingDeals.push(results[i])
        } else if (results[i].status == 'closed') {
          closedDeals.push(results[i]);
        }
      }

      deals = { openDeals: openDeals, pendingDeals: pendingDeals, closedDeals: closedDeals }

      res.render("index", deals)

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
