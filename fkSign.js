var superagent = require('superagent');

onResponse = function (err, res) {
  if (err) {
    return err;
  }
  else {
    return res;
  }
};

exports.rainbow = function (delay) {
  agent = superagent.agent();

  agent
    .get("http://arduino.local/arduino/rainbow/" + delay)
    .end(onResponse);
};

exports.sparkle = function (repeats, minLeds, maxLeds, color) {

  agent = superagent.agent();

  var url = "http://arduino.local/arduino/sparkle";

  if (repeats) {
    url = url + "/" + repeats;
  }
  if (repeats && minLeds) {
    url = url + "/" + minLeds;
  }
  if (repeats && minLeds && maxLeds) {
    url = url + "/" + maxLeds;
  }
  if (repeats && minLeds && maxLeds && color) {
    url = url + "/" + color;
  }

  console.log(url);
  agent
    .get(url)
    .end(onResponse);

};

exports.color = function (red, green, blue) {

  agent = superagent.agent();

  var url = "http://arduino.local/arduino/color";

  if (red) {
    url = url + "/" + red;
  }

  if (red && green) {
    url = url + "/" + green;
  }

  if (red && green && blue) {
    url = url + "/" + blue;
  }

  console.log(url);
  agent
    .get(url)
    .end(onResponse);
  agent
    .get("http://arduino.local/arduino/normal/1")
    .end(onResponse);
};
