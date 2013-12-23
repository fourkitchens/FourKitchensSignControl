var fkSign = require("../fksign");
var Color = require("color");

exports.rainbow = function(req, res) {
  res.redirect('/');
  //res.render('update', {body:JSON.stringify(req.body)} );
  fkSign.rainbow(req.body.delay);
};

exports.sparkle = function(req, res) {
  res.redirect('/');
  console.log(req.body);
  fkSign.sparkle(req.body.repeats, req.body.min, req.body.max);
};

exports.color = function(req, res) {
  res.redirect('/');
  color = Color(req.body.color);
  fkSign.color(color.red(), color.green(), color.blue());
};