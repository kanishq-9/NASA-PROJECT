import NasaMain from "./NasaMain";
import NavBar from "./NavBar";
import Upcoming from "./Upcoming";
import History from "./History";
import { useState, useEffect, useCallback } from "react";
import { fetchPlanetData } from "./fetchData/fetchdata";

export default function App() {
  const [currentMenu, setCurrentMenu] = useState("Launch");

  const [dataState, setDataState] = useState([]);
  const url = "http://localhost:8000/planets";
  const fetchData = useCallback(async () => {
    try {
      const planetData = await fetchPlanetData(url);

      setDataState(planetData.map((value) => [value.rowid, value.kepler_name]));
    } catch (err) {
      console.error(err);
    }
  }, []);
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
    return;
  }, [fetchData]);

  const menuComponents = {
    Launch: <NasaMain dataState={dataState} />,
    Upcoming: <Upcoming />,
    History: <History />,
  };
  const renderMenu = () => {
    return menuComponents[currentMenu] || <h1>component not found</h1>;
  };
  function handleMenuChange(change) {
    setCurrentMenu(change);
  }

  return (
    <div className="app-div has-text-centered">
      <NavBar handleMenuChange={handleMenuChange} />
      {renderMenu()}
    </div>
  );
}
