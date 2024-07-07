const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./router");
SequelizeConn = require("./connection/mysql");
const bodyparser = require("body-parser");
dotenv.config();
const sequelizeObj = new SequelizeConn();
const sequelizeConnResult = sequelizeObj.connectDB();
if (!sequelizeConnResult) {
  console.log(err);
  process.exit(1);
}
// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json());

let server;
app.use(bodyparser.json());
app.use(router);
const PORT = process.env.PORT || 8000;
server = app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
server.timeout=600000;