// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../config/isAuthenticated');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/index.html"));
  });

  app.get("/crime-alert", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/crime-alert.html"));
  });

  // blog route loads blog.html
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/register-hero.html"));
  });


  //need a page created for members OR we need a login page created that would lead to the default index.html page
  app.get('/members', isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/members.html'));
  });

};