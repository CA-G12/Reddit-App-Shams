const addPost = require("./posts/addPost");
const deletePost = require("./posts/deletePost");
const getAllPosts = require("./posts/getAllposts");
const getUSerPost = require("./posts/getUserPosts");
const userProfile = require("./user/profile");
const logout = require("./register/logout");
const signIn = require("./register/signin");
const signUp = require("./register/signup");
const addComment = require("./comments/addComment");
const getSinglePost = require("./posts/getSinglePost");
const getPostComments = require("./comments/getPostCommnets");
const deleteComment = require("./comments/deleteComment");
const getAllUsers = require("./user/getUsers");

module.exports = {
  signUp,
  signIn,
  logout,
  getAllPosts,
  addPost,
  getUSerPost,
  deletePost,
  userProfile,
  getSinglePost,
  addComment,
  getPostComments,
  deleteComment,
  getAllUsers
};
