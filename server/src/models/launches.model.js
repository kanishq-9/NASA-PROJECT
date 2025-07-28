const launches = new Map();

let launch = {
  rocketNumber: 100,
  mission: "ABC",
  rocket: "ABC",
  launchDate: new Date("01-09-2001").toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
  destination: "ABC",
  customer: ["ISRO", "Potter University"],
  success: true,
  upcoming: true,
};
launches.set(launch.rocketNumber, launch);

module.exports = {
  launches,
};
