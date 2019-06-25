'use strict';

//Content page
const mysql         = require('mysql'),
      config_db     = require('../database/config'),
      db            = mysql.createConnection(config_db);

let   session;    

//Home page | Index
exports.accueil = function(req, res) {
    res.render('pages/index.html.twig');
};

exports.ocean = function(req, res) {
    res.render('pages/ocean.html.twig');
};

