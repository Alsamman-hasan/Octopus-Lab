/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const express = require("express");

// const app = express();

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require("path");

// const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

// app.listen(port, (err) => {
//   // eslint-disable-next-line no-console
//   if (err) return console.log(err);
//   console.log(`Server running on port ${port}`);
// });


const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), () => {
  console.log("listening on port ", server.address().port);
});