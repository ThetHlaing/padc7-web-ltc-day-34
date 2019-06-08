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

const publicVapidKey =
  "BJw6ywdT_-tC5Z2uJali3t0o0Xj3udvdOjWpOQH3OufMS1GV4xnypCYPouqcSv3BxfCjsc2p1yws_sUQiNoAlfs";
const privateVapidKey = "Qfi9AwghLyQe0r3SyLnjYHu2Jc6T22ezq5LEe9_OZ2c";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

app.get('/', (req, res) => {
  res.render('index');
})

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Create payload
  const payload = JSON.stringify({ title: "Push Test", body: "This is to annoy the users" });
  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .then(() => {
      res.status(201).json({});
    })
    .catch(err => console.error(err));


});

const port = 5002;

app.listen(port, () => console.log(`Server started on port ${port}`));
