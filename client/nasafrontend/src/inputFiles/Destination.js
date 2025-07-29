import { useState } from "react";
export default function Destination({ dataState, setDestination }) {
  const [selectedValue, setSelectedValue] = useState(
    dataState[0] ? dataState[0][1] : ""
  );

  const handleSelectChange = function (e) {
    setSelectedValue(e.target.value);
    setDestination(e.target.value);
  };
  const renderData = (value) => {
    return value.map((chunks) => <option key={chunks[0]}>{chunks[1]}</option>);
  };

  return (
    <div className="m-3 select is-rounded control">
      <label> Destination Exoplanet: </label>
      <select
        className="is-hovered"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {renderData(dataState)}
      </select>
    </div>
  );
}
