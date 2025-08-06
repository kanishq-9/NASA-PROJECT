const { getPlanetsData } = require("../../models/planets.model");

async function getAllPlanets(req, res) {
  return res.status(200).json(await getPlanetsData());
}

module.exports = { getAllPlanets };
