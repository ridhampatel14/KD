const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/connect");
const configRoutes = require("./routes");

dotenv.config();
const app = express();

app.use(express.json());

connectDB().then(() => {
  configRoutes(app);

  app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
  });
}).catch(error => {
  console.error("Failed to connect to the database:", error);
  process.exit(1); // Exit process on DB failure
});
