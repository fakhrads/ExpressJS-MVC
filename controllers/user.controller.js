exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.dashboard = (req, res) => {
  res.render('dashboard');
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};