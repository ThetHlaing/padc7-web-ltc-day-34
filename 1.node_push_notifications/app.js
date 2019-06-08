const express = require("express");
//https://www.npmjs.com/package/web-push
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "static")));
app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index');
})

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Create payload
  const payload = JSON.stringify({ title: "Push Test", body: "This is to annoy the users" });


});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
