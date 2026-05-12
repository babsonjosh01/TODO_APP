
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const router  = require("./route/todoRoute");
const live_url =
  "mongodb+srv://babsonjosh01_db_user:ayooluwa1@cluster2.u7iga2i.mongodb.net/";
const local_url = "mongodb://localhost:27017/userDB";
mongoose
  .connect(live_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
})
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});