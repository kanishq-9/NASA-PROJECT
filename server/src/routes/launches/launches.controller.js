const { parseLaunches, addNewLaunch } = require("../../models/launches.model");

async function getLaunchData(req, res) {


  return res.status(200).json(await parseLaunches());
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;
  

if(!launch.mission || !launch.rocket || !launch.destination || !launch.launchDate){
  console.log("enter if1")
  return res.status(400).json({
    message:"missing launch property"
  })
}
// launch.launchDate = new Date(launch.launchDate).toISOString().slice(0, 10);
launch.launchDate = new Date(launch.launchDate);
if(isNaN(launch.launchDate)){
    console.log("enter if2")
console.log(launch);

  return res.status(400).json({
    message:"invalid Launch Date"
  })
}
console.log(launch);
  await addNewLaunch(launch);
  return res.status(201).json(req.body);
}

module.exports = { getLaunchData, httpAddNewLaunch };
