const router = require('express').Router();
const { signUp, signIn, getAllPosts } = require('../controllers');


router.post('/signup', signUp);
router.post('/signin', signIn);

router.get('/', getAllPosts)
module.exports = router;
