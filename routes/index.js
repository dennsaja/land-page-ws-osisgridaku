const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
router.get("/404", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'notfound.html'));
});

module.exports = router;
