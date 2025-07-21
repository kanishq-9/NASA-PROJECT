import NasaMain from "./NasaMain";
import NavBar from "./NavBar";
import Upcoming from "./Upcoming";
import History from "./History";
import { useState } from "react";

export default function App() {
  const [currentMenu, setCurrentMenu] = useState("Launch");
  const menuComponents = {
    Launch: <NasaMain />,
    Upcoming: <Upcoming />,
    History: <History />,
  };
  const renderMenu = () => {
    console.log(currentMenu);
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
