const launchesDatabase = require("./launches.mongo");
const planetsDatabase = require('./planets.mongo');

// const launches = new Map(); 
// let latestFlightNumber = 100;
const DEFAULT_LATEST_LAUNCH_NUMBER=100;
async function getNewFlightNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort("-rocketNumber");
  if(!latestLaunch){
return DEFAULT_LATEST_LAUNCH_NUMBER;
  }
  return latestLaunch.rocketNumber;
}


// let launch = {
//   rocketNumber: 100,
//   mission: "ABC",
//   rocket: "ABC",
//   launchDate: new Date("01-09-2001").toLocaleString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }),
//   destination: "Kepler-296 f",
//   customer: ["ISRO", "Potter University"],
//   success: true,
//   upcoming: true,
// };

// saveLaunches(launch);
// launches.set(launch.rocketNumber, launch);

async function parseLaunches() {
  // return Array.from(launches.values());
  return await launchesDatabase.find({},{
    "_id":0,
    "__v":0
  });
}

async function saveLaunches(launch) {
  const planet = await planetsDatabase.findOne({
    kepler_name:launch.destination
  });
  if(!planet){
    throw new Error("No planets match "+launch.destination);
    
  }
//   await launchesDatabase.updateOne({
//     //check for duplicate
//     rocketNumber:launch.rocketNumber
//   },

//   //insert
//   launch
// ,{
//   upsert:true
// });
//similar to update but just outputs the object that launches input and nothing more
await launchesDatabase.findOneAndUpdate({
    //check for duplicate
    rocketNumber:launch.rocketNumber
  },

  //insert
  launch
,{
  upsert:true
});
}



async function addNewLaunch(launch){
  const newRocketNumber = await getNewFlightNumber()+1;
const newLaunch = Object.assign(launch,{
  success: true,
      upcoming: true,
      customer: ["ISRO", "Potter University"],
      rocketNumber: newRocketNumber ,
})
await saveLaunches(newLaunch);
}

// function addNewLaunch(launch) {
//   latestFlightNumber++;
//   launches.set(
//     latestFlightNumber,
//     Object.assign(launch, {
//       success: true,
//       upcoming: true,
//       customer: ["ISRO", "Potter University"],
//       rocketNumber: latestFlightNumber,
//     })
//   );
// }

module.exports = {
  parseLaunches,
  addNewLaunch,
};
