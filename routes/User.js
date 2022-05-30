const express = require("express");
const {
  createNewUser,
  logIn,
  getAllUser,
  deleteUser,
} = require("../controllers/User");
const { checkRolePermission } = require("../middlewares/checkRole");
const router = express.Router();

router.route("/register").post(createNewUser);
router.route("/log-in").post(logIn);
router.route("/get-all").get(checkRolePermission, getAllUser);
router.route("/delete").delete(checkRolePermission, deleteUser);

module.exports = router;
