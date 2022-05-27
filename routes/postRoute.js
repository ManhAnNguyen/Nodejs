const express = require("express");
const router = express.Router();
const { checkRolePermission } = require("../middleware/checkRole");
const {
  createNewPost,
  getAllPosts,
  deletePostById,
  getPostById,
  editPostById,
} = require("../controller/postControler");

router
  .route("/")
  .get(getAllPosts)
  .post(checkRolePermission, createNewPost)
  .delete(checkRolePermission, deletePostById)
  .patch(checkRolePermission, editPostById);

router.route("/:id").get(getPostById);

module.exports = router;
