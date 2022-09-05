const addPost = require('./posts/addPost');
const getAllPosts = require('./posts/getAllposts');
const getUSerPost = require('./posts/getUserPosts');
const signIn = require('./register/signin');
const signUp = require('./register/signup');

module.exports = { signUp, signIn, getAllPosts, addPost, getUSerPost };
