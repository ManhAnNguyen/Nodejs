const ClassComments = require("../services/Comments");

exports.createNewComment = async (req, res, next) => {
  try {
    const { comment, userId, postId } = req.body;
    const comments = new ClassComments(comment, userId, postId);
    const data = await comments.handleCreateComment();
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong!!" });
  }
};

exports.getAllCommentsByIdPost = async (req, res, next) => {
  try {
    const data = await ClassComments.handleGetAllComments(req.params.idPost);
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong!!" });
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const response = await ClassComments.handleDeleteComment(req.body.id);
    if (response) {
      res.status(200).json({ message: "Delete comment successfully" });
    } else {
      res
        .status(404)
        .json({ message: `Comment with id ${req.body.id} doesn't exist` });
    }
  } catch (err) {
    res.status(404).json({ message: "Something went wrong!!" });
  }
};
