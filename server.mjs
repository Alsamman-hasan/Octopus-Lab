import express from "express";
import herokuSSLRedirect from "heroku-ssl-redirect";
import * as path from "path";

const sslRedirect = herokuSSLRedirect.default;

const app = express();
app.use(sslRedirect());
app.use(express.static(path.join("./dist")));
app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), () => {
  console.log("listening on port ", server.address().port);
});
