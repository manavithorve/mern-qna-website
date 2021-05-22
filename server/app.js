const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./db/connection");

const PORT = process.env.PORT;
app.use(express.json());

app.use(require("./router/auth"));

// app.get("/about", (req, res) => {
//   res.send("Hello world from About!!!");
// });

// app.get("/signin", (req, res) => {
//   res.send("Hello world from Sign in!!!");
// });

app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
