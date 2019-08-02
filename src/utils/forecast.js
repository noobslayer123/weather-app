const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/899a2ff1424f327995625f51038a7665/${latitude},${longitude}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services.', undefined);
    } else if (response.body.error) {
      callback(
        'Unable to retrieve weather info, try another search.',
        undefined
      );
    } else {
      const { temperature, precipProbability } = response.body.currently;
      const { summary } = response.body.daily;
      callback(undefined, {
        summary,
        temperature,
        precipProbability
      });
    }
  });
};

module.exports = forecast;
