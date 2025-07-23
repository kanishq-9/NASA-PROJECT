const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = [];
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve();
        console.log(planets.length)
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets,
};

//the stream is an asynchronous, so whenever this module is called it loads the planet export before stream has completed because it is asychronous.. Hence we use promise
//we then export loadPlanetData and in the server we wait
