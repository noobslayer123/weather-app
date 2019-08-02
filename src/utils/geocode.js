const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic3Rhc3Nub3ciLCJhIjoiY2p5cmtzeDFsMGI1ODNkbzdrNXM0dHJwayJ9.nJme7OpJQw_5bO1F7n03ZQ&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location, try another search.', undefined);
    } else {
      const { center, place_name } = response.body.features[0];

      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      });
    }
  });
};

module.exports = geocode;
