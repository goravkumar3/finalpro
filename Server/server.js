const express = require("express");
const routers = require("./router/storerouter");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin:["http://localhost:5173"],
  methods:["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routers);
app.listen(3000, () => {
  console.log("port listening");
});
