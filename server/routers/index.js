const router = require('express').Router();
const { signUp } = require('../controllers');

router.post('/signup', signUp);
module.exports = router;
