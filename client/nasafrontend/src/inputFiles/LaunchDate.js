import {useState} from 'react';
export default function LaunchDate() {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0,10);
  const [currentDate,setCurrentDate]=useState(formattedDate);
  const handleDateChange = function(e){
    if(e.target.value>=formattedDate)
    setCurrentDate(e.target.value);
  }
  return (
    <div className="m-3 control">
      <label> Launch Date: </label>
      <input className="input is-normal is-hovered" type="date" value={currentDate} onChange={handleDateChange}/>
    </div>
  );
}
