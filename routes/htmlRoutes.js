const path = require('path');

// Exporting routes so they can be pulled in on the server
module.exports = function (app) {
    // GET request handler for /
    app.get('/', function (req, res) {
    // Response: Loads the index.html
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
    // GET request handler for /notes
    app.get('/notes', function (req, res) {
    // Response: Loads the notes.html
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
};
