const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");
const planets = require("./planets.mongo");

const habitablePlanets = [];
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
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          // habitablePlanets.push(data);
          //create creates multiple data if called again and again
          // await planets.create({
            //   kepler_name:data.kepler_name,
            // });
            //moongoose provide insert + update = upsert, using updateOne({insert if doesnot exist},{update if exist},{options})
          savePlanets(data);

        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        resolve();      
      });
  });
}

async function getPlanetsData() {
  //find is a powerful method that mongodb uses
  return await planets.find({});
}
async function savePlanets(data){
  try{
        await planets.updateOne({
            kepler_name:data.kepler_name,
          },{
            kepler_name:data.kepler_name,
          },{
            upsert: true
          });
  }catch(err){
    console.error(`Could not save planet ${err}`);
  }
  
}


module.exports = {
  loadPlanetsData,
  getPlanetsData,
};

//the stream is an asynchronous, so whenever this module is called it loads the planet export before stream has completed because it is asychronous.. Hence we use promise
//we then export loadPlanetData and in the server we wait
