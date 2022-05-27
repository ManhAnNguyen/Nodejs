const Comments = require("../model/commentModel");

exports.createNewComment = async (req, res, next) => {
  try {
    const { comment, idUser, idPost } = req.body;
    const comments = new Comments(comment);
    await comments.createNewComment(idUser, idPost);
    res.status(200).json("Add Comment Successfully");
  } catch (err) {
    res.status(404).json("Failed");
  }
};

exports.getCommentByPostId = async (req, res, next) => {
  try {
    const data = await Comments.getAllCommentByIdPost(req.body.idPost);
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json("Failed");
  }
};

exports.deleteCommentByIdPost = async (req, res, next) => {
  try {
    await Comments.deleteCommentByIdPost(req.body.id);
    res.status(200).json("Delete comment successfully");
  } catch (err) {
    res.status(404).json("Failed");
  }
};
