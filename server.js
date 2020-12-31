const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// Connecting api routes to html
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Start and confirm listening on server port
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
