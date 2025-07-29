const { parseLaunches, addNewLaunch } = require("../../models/launches.model");

function getLaunchData(req, res) {
  return res.status(200).json(parseLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate).toISOString().slice(0, 10);
  addNewLaunch(launch);
  return res.status(201).json(req.body);
}

module.exports = { getLaunchData, httpAddNewLaunch };
