const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//BodyParser middleware:
app.use(bodyParser.json());

//Serve static assets if in production:
if (process.env.NODE_ENV === "production") {
  //set static folder:
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    app.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever started on ${port}`));
