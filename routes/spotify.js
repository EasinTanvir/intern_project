const express = require("express");
const router = express.Router();
const fetchSpotify = require("../controllers/spotify");
router.route("/spotify").get(fetchSpotify.fetchSpotify);
module.exports = router;
