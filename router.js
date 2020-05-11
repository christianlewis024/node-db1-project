const express = require("express");
const db = require("./data/dbConfig");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then((accounts) => {
      res.status(200).json({ data: accounts });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

router.post("/", (req, res) => {
  const post = req.body;
  if (isValidPost(post)) {
    db("accounts")
      .insert(post, "id")
      .then((ids) => {
        res.status(201).json({ data: ids });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: error.message });
      });
  }
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  db("accounts")
    .where({ id: req.params.id })
    .update(changes)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ data: count });
      } else {
        res.status(404).json({ message: "404, no record found by that id" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "500 - server error" });
    });
});

router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "deleted" });
      } else {
        res.status(404).json({ message: "404 no record of ID found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

function isValidPost(post) {
  return Boolean(post.name && post.budget);
}
module.exports = router;
