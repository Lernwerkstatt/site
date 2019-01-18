const express = require("express");
const { MongoClient } = require("mongodb");
const dbUrl = require("../../config/secrets");

const dbname = "lernwerkstatt";

MongoClient.connect(
  dbUrl,
  { useNewUrlParser: true }
)
  .then(client => {
    const db = client.db(dbname);
    const coll = db.collection("elite");
    coll.insertOne({ name: "Beta", level: 7 });
  })
  .catch(err => console.log(err));

const router = express.Router();

router.get("/blog", (req, res) => {
  res.render("blog");
});

module.exports = router;
