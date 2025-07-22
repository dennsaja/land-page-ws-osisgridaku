const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
router.get("/error?id=MDICEEC93ND9DEDJDD404CICJ4I44INN4IFJ4FIJWXNCNDJDEI9994333", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'error-sytem.html'));
});

module.exports = router;
