import NasaMain from "./NasaMain";
import NavBar from "./NavBar";
import Upcoming from "./Upcoming";
import History from "./History";
import "./css/style.css";
import { useState, useEffect, useCallback } from "react";
import { fetchURLData } from "./fetchData/fetchdata";
import ErrorPopUp from "./errorpopup";

export default function App() {
  const [currentMenu, setCurrentMenu] = useState("Launch");
  const [errorValue, setError] = useState([false, ""]);

  const [dataState, setDataState] = useState([]);
  const [launchDataState, setLaunchDataState] = useState([]);
  const url = "http://localhost:8000";
  const fetchPlanetDataFunction = useCallback(async () => {
    try {
      const planetData = await fetchURLData(url, "planets");

      setDataState(planetData.map((value) => [value.rowid, value.kepler_name]));
    } catch (err) {
      setError([true, err.message]);
    }
  }, []);
  const postLaunchDataFunction = async (body) => {
    try {
      const request = await fetch(url + "/launches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const dataValue = await request.json();
      console.log(dataValue);
      await fetchLaunchData();
    } catch (err) {
      setError([true, err.message]);
    }
  };

  const fetchLaunchData = useCallback(async () => {
    try {
      const launchData = await fetchURLData(url, "launches");
      setLaunchDataState([...launchData]);
    } catch (err) {
      setError([true, err.message]);
    }
  }, []);

  useEffect(() => {
    try {
      fetchPlanetDataFunction();
      fetchLaunchData();
    } catch (err) {
      setError([true, err.message]);
    }
    return;
  }, [fetchPlanetDataFunction, fetchLaunchData]);

  const menuComponents = {
    Launch: (
      <NasaMain
        dataState={dataState}
        postLaunchDataFunction={postLaunchDataFunction}
      />
    ),
    Upcoming: <Upcoming dataState={launchDataState} />,
    History: <History dataState={launchDataState} />,
  };
  const renderMenu = () => {
    return menuComponents[currentMenu] || <h1>component not found</h1>;
  };
  function handleMenuChange(change) {
    setCurrentMenu(change);
  }
  function handleSetError(value) {
    setError(value);
  }

  const renderError = function () {
    if (errorValue[0])
      return (
        <ErrorPopUp message={errorValue[1]} handleSetError={handleSetError} />
      );
  };

  return (
    <div className="app-div has-text-centered">
      <NavBar handleMenuChange={handleMenuChange} />
      {renderMenu()}
      {renderError()}
    </div>
  );
}
