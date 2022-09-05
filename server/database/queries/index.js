const addPostQuery = require('./posts/addPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');
const showPostsQuery = require('./posts/getAllPostsQuery');
const getUserPostsQuery = require('./posts/getUserPostsQuery');
const selectUserByEmail = require('./register/selectUserByEmail');
const signInQuery = require('./register/siginQuery');
const signUpQuery = require('./register/signupQuery');


module.exports = { signUpQuery, selectUserByEmail, signInQuery, showPostsQuery, addPostQuery, deletePostQuery, getUserPostsQuery };
