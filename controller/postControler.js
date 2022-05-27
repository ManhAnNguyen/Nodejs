const Post = require("../model/postModel");

exports.createNewPost = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const post = new Post(title, desc);
    await post.createPost();
    res.status(200).json("Create post successfully");
  } catch (err) {
    console.log(err);
    res.status(404).json("Failed");
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const data = await Post.getAllPosts();
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json("Failed");
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    await Post.deletePost(req.body.id);
    res.status(200).json("Delete post successfully!!");
  } catch (err) {
    console.log(err);
    res.status(404).json("Failed");
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const data = await Post.getPostById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json("Failed");
  }
};

exports.editPostById = async (req, res, next) => {
  try {
    const { id, title, description } = req.body;
    const post = new Post(title, description);
    const data = await post.editPostById(id);

    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json("Failed");
  }
};
