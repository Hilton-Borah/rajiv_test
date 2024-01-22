// controllers/postController.js

const Post = require("../models/post"); // Adjust the path based on your structure
const upload = require("../utils/multerConfig"); // Adjust the path based on your structure

const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const imageUrl = req.file ? req.file.path : undefined;

    const newPost = new Post({
      caption,
      imageUrl,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const resultPosts = await Post.find({});

    res.json(resultPosts);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createPost, getAllPosts };
