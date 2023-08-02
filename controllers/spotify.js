const axios = require("axios");
const HttpError = require("../utils/HttpError");

const fetchSpotify = async (req, res, next) => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "<REQUIRED>",
      type: "multi",
      offset: "0",
      limit: "20",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "f0e897e78bmsh9ff09172e93bf83p1835f1jsndb921edd8c54",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data.playlists.items);
  } catch (err) {
    const errors = new HttpError("fetch products failed", 404);
    return next(errors);
  }
};
module.exports = {
  fetchSpotify,
};
