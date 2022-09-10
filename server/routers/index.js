const router = require("express").Router();
const {
  signUp,
  signIn,
  getAllPosts,
  addPost,
  getUSerPost,
  deletePost,
  logout,
  userProfile,
  addComment,
  getSinglePost,
  getPostComments,
  deleteComment,
} = require("../controllers");
const verifyToken = require("../middlewares/verifyToken");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/logout", logout);

router.get("/home", getAllPosts);
router.post("/post/add-post", verifyToken, addPost);
router.get("/post/get-post", verifyToken, getUSerPost);
router.get("/single-post/:id", getSinglePost);
router.delete("/post/delete/:id", verifyToken, deletePost);
router.get("/user/profile", verifyToken, userProfile);

router.post("/single-post/:id/comments", verifyToken, addComment);
router.get("/single-post/:id/comments", getPostComments);
router.delete("/single-post/:id/comments/:id", deleteComment)

module.exports = router;
