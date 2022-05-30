const jwt = require("jsonwebtoken");

const checkRolePermission = (req, res, next) => {
  const token = req.headers["authorization"];

  const tokenAccess = token && token.split(" ")[1];
  if (!tokenAccess) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  jwt.verify(tokenAccess, process.env.USER_SECRET_KEY, (err, data) => {
    if (err) {
      res.status(403).json({ message: "Invalid Token" });
      return;
    }
    if (data.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: `You don't have permission` });
    }
  });
};

module.exports = { checkRolePermission };
