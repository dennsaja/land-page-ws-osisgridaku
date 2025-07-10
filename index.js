// Import packages
const express = require("express");
const path = require('path');
const index = require("./routes/index");

// Middlewares
const app = express();
app.use(express.json());

// Routes

app.use("/", index);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
