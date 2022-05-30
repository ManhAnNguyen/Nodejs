const express = require("express");
const {
  createNewPost,
  getAllPost,
  getPostById,
  deletePost,
  editPost,
} = require("../controllers/Post");
const { checkRolePermission } = require("../middlewares/checkRole");

const router = express.Router();

router
  .route("/")
  .post(checkRolePermission, createNewPost)
  .get(getAllPost)
  .delete(checkRolePermission, deletePost)
  .patch(checkRolePermission, editPost);
router.route("/:id").get(getPostById);

module.exports = router;
