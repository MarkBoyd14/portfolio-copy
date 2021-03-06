const viewPath = 'pages';

exports.about = (req, res) => {
  res.render(`${viewPath}/about`);
};

exports.resume = (req, res) => {
  res.render(`${viewPath}/resume`);
};

exports.projects = (req, res) => {
  res.render(`${viewPath}/resume`);
};

exports.contact = (req, res) => {
  res.render(`${viewPath}/resume`);
};
