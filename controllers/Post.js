const PostClass = require("../services/Post");

exports.createNewPost = async (req, res, next) => {
  try {
    const { title, postText } = req.body;
    const post = new PostClass(title, postText);
    const data = await post.handleCreatePost();
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

exports.getAllPost = async (req, res, next) => {
  try {
    const data = await PostClass.handleGetAllPost();
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const data = await PostClass.handleGetPostById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const response = await PostClass.handleDeletePost(req.body.id);

    if (response) {
      res.status(200).json({ message: "Delete Post successfully" });
    } else {
      res.status(404).json({ message: "Failed" });
    }
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const { title, postText, id } = req.body;
    const post = new PostClass(title, postText);
    const response = await post.handleEditPost(id);
    if (response) {
      res.status(200).json({ message: "Edit Post successfully" });
    } else {
      res.status(404).json({ message: "Failed" });
    }
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
