const { Posts } = require("./Posts");

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Comments.belongsTo(Posts, { foreignKey: "id", targetKey: "id" });

  // Comments.belongsTo(Posts);
  return Comments;
};
