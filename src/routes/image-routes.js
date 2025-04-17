const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const roleBasedMiddleware = require("../middlewares/role-based-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImage,
  fetchImages,
  deleteImage,
} = require("../controllers/image-controller");

const router = express.Router();

// upload the image
router.post(
  "/upload",
  authMiddleware,
  roleBasedMiddleware,
  uploadMiddleware.single("image"),
  uploadImage
);
// get all the image
router.get("/get", authMiddleware, fetchImages);
//delete the image
router.delete("/delete/:id", authMiddleware, roleBasedMiddleware, deleteImage);

module.exports = router;
