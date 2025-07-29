import "./css/style.css";
import RotatingPlanet from "./inputFiles/RotatingPlanet";
import LaunchDate from "./inputFiles/LaunchDate";
import MissionName from "./inputFiles/MissionName";
import Button from "./inputFiles/Button";
import RocketType from "./inputFiles/RocketType";
import Destination from "./inputFiles/Destination";

export default function Input({ dataState, postLaunchDataFunction }) {
  const missionData = {
    mission: "mission landing",
    rocket: "Aryabhatta",
    launchDate: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    destination: dataState[0] ? dataState[0][1] : "",
  };

  async function setMissionName(value) {
    missionData.mission = await value;
  }
  async function setRocket(value) {
    missionData.rocket = await value;
  }
  async function setLaunchDate(value) {
    missionData.launchDate = await value;
  }
  async function setDestination(value) {
    missionData.destination = await value;
  }

  return (
    <div className="input-data title is-1">
      <LaunchDate setLaunchDate={setLaunchDate} />
      <MissionName setMissionName={setMissionName} />
      <RocketType setRocket={setRocket} />
      <Destination dataState={dataState} setDestination={setDestination} />
      <Button
        postLaunchDataFunction={postLaunchDataFunction}
        missionData={missionData}
      />
      <RotatingPlanet />
    </div>
  );
}
