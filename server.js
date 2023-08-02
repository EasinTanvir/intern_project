const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const spotify = require("./routes/spotify");

app.use(express.json());
app.use(express.static(path.join("public")));

//routes
app.use(spotify);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "unknown error occured" });
});

app.listen(process.env.PORT);
