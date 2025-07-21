const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(cors()); //all cross-origin request

/*
for specific cors
app.use(cors({
origin:"http://localhost:3000"
"}))
*/
app.use(express.json()); //parse any incoming string json to json and attaches to req.body
app.use(planetsRouter);

// export default { app };
module.exports = app;
