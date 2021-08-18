const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/config/database");
const userRoute = require("./src/routers/user");

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//Test db
db.authenticate()
  .then(() => {
    console.log("MYSQL Connected...");
  })
  .catch((error) => console.log("Can't Connect! ", error.message));

app.use(userRoute);

app.listen(PORT, () => {
  console.log("Server started on Port " + PORT);
});
