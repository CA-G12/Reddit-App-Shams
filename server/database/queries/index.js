const addPostQuery = require("./posts/addPostQuery");
const deletePostQuery = require("./posts/deletePostQuery");
const showPostsQuery = require("./posts/getAllPostsQuery");
const getUserPostsQuery = require("./posts/getUserPostsQuery");
const selectUserByEmail = require("./register/selectUserByEmail");
const signInQuery = require("./register/siginQuery");
const signUpQuery = require("./register/signupQuery");
const userProfileQuery = require("./user/profileQuery");
const addCommentQuery = require("./comments/addCommentQuery");
const getSinglePostQuery = require("./posts/getSinglePostQuery");
const getPostCommentsQuery = require("./comments/getPostCommentsQuery");
const deleteCommentQuery = require("./comments/deleteCommentQuery");
const getAllUsersQuery = require("./user/getAllusers.Query");


module.exports = {
  signUpQuery,
  selectUserByEmail,
  signInQuery,
  showPostsQuery,
  addPostQuery,
  deletePostQuery,
  getUserPostsQuery,
  userProfileQuery,
  getSinglePostQuery,
  addCommentQuery,
  getPostCommentsQuery,
  deleteCommentQuery,
  getAllUsersQuery
};
