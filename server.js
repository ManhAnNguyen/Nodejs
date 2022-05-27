const express = require("express");
const app = express();

app.use(express.json());

app.use("/user", require("./routes/userRoute"));
app.use("/posts", require("./routes/postRoute"));
app.use("/comments", require("./routes/commentRoute"));

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
