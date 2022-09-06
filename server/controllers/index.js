const addPost = require('./posts/addPost');
const deletePost = require('./posts/deletePost');
const getAllPosts = require('./posts/getAllposts');
const getUSerPost = require('./posts/getUserPosts');
const logout = require('./register/logout');
const signIn = require('./register/signin');
const signUp = require('./register/signup');


module.exports = { signUp, signIn, logout, getAllPosts, addPost, getUSerPost, deletePost };
