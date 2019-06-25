'use strict';

//Content page
const   local         = require('../locales/local.json'),
        mysql         = require('mysql'),
        config_db     = require('../database/config'),
        db            = mysql.createConnection(config_db);

let   session;    

//Home page | Index
exports.accueil = function(req, res) {
    res.render('pages/index.html.twig');
};

exports.amazon = function(req, res) {
    res.render('pages/amazon.html.twig', { data : local.amazon });
};

