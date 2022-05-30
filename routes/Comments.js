const express = require("express");
const {
  createNewComment,
  getAllCommentsByIdPost,
  deleteComment,
} = require("../controllers/Comments");
const { authPermision } = require("../middlewares/auth");
const { checkRolePermission } = require("../middlewares/checkRole");
const router = express.Router();

router
  .route("/")
  .post(authPermision, createNewComment)
  .delete(checkRolePermission, deleteComment);

router.route("/:idPost").get(getAllCommentsByIdPost);

module.exports = router;
