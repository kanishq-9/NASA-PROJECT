import { useState } from "react";
export default function RocketType({ setRocket }) {
  const [type, setType] = useState("Aryabhatta");
  const onValueChange = function (e) {
    setType(e.target.value);
    setRocket(e.target.value);
  };
  return (
    <div className="m-3 control">
      <label> Rocket Type: </label>
      <input
        className="input is-normal is-hovered"
        type="text"
        // style={{ color: "white" }}
        value={type}
        onChange={onValueChange}
        required
      />
    </div>
  );
}
