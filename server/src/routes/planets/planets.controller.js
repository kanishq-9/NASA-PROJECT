const { getPlanetsData } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(getPlanetsData());
}

module.exports = { getAllPlanets };
