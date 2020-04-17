// Requiring necessary npm packages
var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Creating express app and configuring middleware needed 

app.use(express.urlencoded({ extended: true }));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });


// app listening to server
app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:" + PORT);
});


