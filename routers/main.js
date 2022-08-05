const express = require('express');
const router = express.Router();
const {home, about} = require('../controllers/mainController')

router.use('/', home);
router.use('/about', about);



module.exports = router;