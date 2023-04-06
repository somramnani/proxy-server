const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/:data", async (req, res) => {
  console.log(req.headers);
  await axios({
    method: "post",
    url: "https://api.primitives.xyz/api/interview/searchTokens",
    data: {
      query: req.params.data,
    },
  })
    .then(function (response) {
      res.send(response.data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log("params:", req.params);
});

app.get("/", (req, res) => {
  const hotText = "repo";
  const url = "https://github.com/somramnani/proxy-server";
  const link = res.send(
    `Server is running, check out the ${hotText.link(
      url
    )} to view the documentation`
  );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
