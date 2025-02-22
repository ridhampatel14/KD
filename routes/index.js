// const express = require("express");
// const dataRoutes = require("./dataRoute");

// const router = express.Router();

// router.use("/", dataRoutes);
// router.use("*", (req, res) => {
//   res.status(404).json({ error: "Not Found" });
// });

// module.exports = router;
const dataRoutes = require("./dataRoute");

const constructorMethod = (app) => {
  app.use("/", dataRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not Found" });
  });
};

module.exports = constructorMethod;
