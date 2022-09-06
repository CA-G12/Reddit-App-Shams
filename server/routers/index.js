const router = require('express').Router();
const { signUp, signIn, getAllPosts, addPost, getUSerPost, deletePost, logout } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', logout);

router.get('/home', getAllPosts);
router.post('/post/add-post', verifyToken, addPost);
router.get('/post/get-post', verifyToken, getUSerPost);
router.delete('/post/delete/:id', verifyToken, deletePost);


module.exports = router;
