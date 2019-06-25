'use strict';
let express     = require('express'),
    router      = express.Router(),
    index       = require('../controllers/indexController');

//Routes
router.get('/', index.accueil )

router.get('/ocean', index.ocean )

module.exports = router;