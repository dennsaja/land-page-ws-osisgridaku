// Import packages
const express = require("express");
const path = require('path');
const err = require("./routes/error-system");
const index = require("./routes/index");

// Middlewares
const app = express();
app.use(express.json());

// Routes

app.use("/", index);
app.use("/error?id=MDICEEC93ND9DEDJDD404CICJ4I44INN4IFJ4FIJWXNCNDJDEI9994333", err);
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
