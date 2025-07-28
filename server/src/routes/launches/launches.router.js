const express = require("express");
const { getLaunchData } = require("./launches.controller");

const launchRouter = express.Router();

launchRouter.get("/launches", getLaunchData);

module.exports = launchRouter;
