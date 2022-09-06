const addPostQuery = require('./posts/addPostQuery');
const deletePostQuery = require('./posts/deletePostQuery');
const showPostsQuery = require('./posts/getAllPostsQuery');
const getUserPostsQuery = require('./posts/getUserPostsQuery');
const selectUserByEmail = require('./register/selectUserByEmail');
const signInQuery = require('./register/siginQuery');
const signUpQuery = require('./register/signupQuery');
const userProfileQuery = require('./user/profileQuery');


module.exports = { signUpQuery, selectUserByEmail, signInQuery, showPostsQuery, addPostQuery, deletePostQuery, getUserPostsQuery, userProfileQuery };
