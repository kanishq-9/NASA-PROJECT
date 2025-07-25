import {useState} from 'react';
export default function MissionName() {
  const [mission,setMission]=useState("mission landing");
  const handleMissionChange = function(e){
    setMission(e.target.value);
  }
  return (
    <div className="m-3 control">
      <label for="mission-name"> Mission Name: </label>
      <input
        id="misson-name"
        className="input is-normal is-hovered"
        type="text"
        value={mission}
        onChange = {handleMissionChange}
      />
    </div>
  );
}
