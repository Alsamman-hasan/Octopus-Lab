// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");

const app = express();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

// eslint-disable-next-line consistent-return
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server running on port ${port}`);
});
