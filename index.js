require("dotenv").config();
const express = require("express");
const app = express();
const CPU = require("os").cpus();

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    cores: CPU.length + " cores",
    test: "some changes",
    cpus: CPU[0],
    env: process.env.SOME_ENV || "none",
  });
});

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), async function () {
  console.log(`Server running on port ${app.get("port")}`);
});
