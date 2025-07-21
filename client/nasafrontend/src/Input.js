import "./css/style.css";
import RotatingPlanet from "./inputFiles/RotatingPlanet";
import LaunchDate from "./inputFiles/LaunchDate";
import MissionName from "./inputFiles/MissionName";
import Button from "./inputFiles/Button";
import RocketType from "./inputFiles/RocketType";
import Destination from "./inputFiles/Destination";

export default function Input() {
  return (
    <div className="input-data title is-1">
      <LaunchDate />
      <MissionName />
      <RocketType />
      <Destination />
      <Button />
      <RotatingPlanet />
    </div>
  );
}
