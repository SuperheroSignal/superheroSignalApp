// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the reports
  app.get("/api/reports/", function(req, res) {
    // console.log('db: ',db)
    db.Report.findAll({})
    .then(function(dbReport) {
      res.json(dbReport);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/reports/category/:category", function(req, res) {
    db.Reports.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbReport) {
      res.json(dbReport);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/reports/:id", function(req, res) {
    db.Reports.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbReport) {
      res.json(dbReport);
    });
  });

  // POST route for saving a new post
  app.post("/api/reports", function(req, res) {
    console.log(req.body);
    db.Reports.create({
      situation: req.body.situation,
      description: req.body.description,
      category: req.body.category
    })
    .then(function(dbReport) {
      res.json(dbReport);
    });
  });

  // PUT route for updating posts
  app.put("/api/reports", function(req, res) {
    db.Report.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbReport) {
      res.json(dbReport);
    });
  });
};