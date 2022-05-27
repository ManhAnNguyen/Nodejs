const express = require("express");
const router = express.Router();
const {
  createNewUser,
  logIn,
  getAllUser,
  deleteUser,
} = require("../controller/userController");
const { checkRolePermission } = require("../middleware/checkRole");

router.route("/register").post(createNewUser);
router.route("/log-in").post(logIn);
router.route("/get-all").get(checkRolePermission, getAllUser);
router.route("/delete").delete(checkRolePermission, deleteUser);

module.exports = router;
