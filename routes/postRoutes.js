// routes/postRoutes.js

const express = require("express");
const postController = require("../controllers/postController"); // Adjust the path based on your structure
const upload = require("../utils/multerConfig"); // Adjust the path based on your structure

const router = express.Router();

router.post("/create", upload.single("image"), postController.createPost);
router.get("/all", postController.getAllPosts);

module.exports = router;
