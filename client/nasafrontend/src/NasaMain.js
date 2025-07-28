import Input from "./Input";
import { useSpring, animated } from "react-spring";

function NasaMain({ dataState }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div className="nasa-main" style={props}>
      <h1 className="title is-1 has-text-info is-family-code">
        NASA Mission Control
      </h1>
      <Input dataState={dataState} />
    </animated.div>
  );
}

export default NasaMain;
