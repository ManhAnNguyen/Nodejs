require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

//routes
app.use("/user", require("./routes/User"));
app.use("/posts", require("./routes/Post"));
app.use("/comments", require("./routes/Comments"));

db.sequelize.sync().then(() => {
  app.listen(3300, () => {
    console.log("Server is running on Port 3300");
  });
});
