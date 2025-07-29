const launches = new Map();
let latestFlightNumber = 100;
// let launch = {
//   rocketNumber: 100,
//   mission: "ABC",
//   rocket: "ABC",
//   launchDate: new Date("01-09-2001").toLocaleString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }),
//   destination: "ABC",
//   customer: ["ISRO", "Potter University"],
//   success: true,
//   upcoming: true,
// };

// launches.set(launch.rocketNumber, launch);

function parseLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ["ISRO", "Potter University"],
      rocketNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  parseLaunches,
  addNewLaunch,
};
