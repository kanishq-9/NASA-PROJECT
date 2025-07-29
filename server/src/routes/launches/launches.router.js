const express = require("express");
const { getLaunchData, httpAddNewLaunch } = require("./launches.controller");

const launchRouter = express.Router();

launchRouter.get("/", getLaunchData);
// launchRouter.post("/launches", httpAddNewLaunch); since we have added /launches in app.js we can just mention / here so inetrnally it works as /launches

launchRouter.post("/", httpAddNewLaunch);

module.exports = launchRouter;
