const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const roleBasedMiddleware = require("../middlewares/role-based-middleware");

router.get("/welcome", authMiddleware, roleBasedMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the Admin Page",
  });
});

module.exports = router;
