const express = require('express');
const app = express(); // create express app
const path = require('path');
const publicPath = path.join(__dirname, '../build');
const routes = require('./routes.js');

app.use('/api', routes);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log('server started on port 5000');
});
