const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require("morgan");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(helmet());
app.use(cors()); //all cross-origin request

//add morgan just after security check for logging data
app.use(morgan("combined"));

/*
for specific cors
app.use(cors({
origin:"http://localhost:3000"
"}))
*/
app.use(express.json()); //parse any incoming string json to json and attaches to req.body

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.use("/launches", launchesRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// export default { app };
module.exports = app;
