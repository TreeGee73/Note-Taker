const path = require('path');

// Exporting routes so they can be pulled in on the server
// module.exports = function (app) {
//     // GET request handler for *
//     app.get('/', function (req, res) {
//     // variable for file location
//     const index = 'Note-Taker/public/index.html';
//     // Response: Loads the index.html
//     res.sendFile(path.join(__dirname, index));
// });
// // GET request handler for /notes
//     app.get('/notes', function (req, res) {
//     // variable for file location
//     const notes = 'Note-Taker/public/notes.html';
//     // Response: Loads the notes.html
//     res.sendFile(path.join(__dirname, notes));
//   });
// };
module.exports = function(app) {
  

    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
  //   app.get("/styles", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
  //   });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };