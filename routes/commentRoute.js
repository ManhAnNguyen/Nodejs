const express = require("express");
const {
  createNewComment,
  getCommentByPostId,
  deleteCommentByIdPost,
} = require("../controller/commentController");
const { authPermision } = require("../middleware/auth");
const { checkRolePermission } = require("../middleware/checkRole");
const router = express.Router();

router
  .route("/")
  .post(authPermision, createNewComment)
  .get(getCommentByPostId)
  .delete(checkRolePermission, deleteCommentByIdPost);

module.exports = router;
