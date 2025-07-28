import { useSpring, animated } from "react-spring";

export default function Upcoming({ dataState }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  const tableHeader = ["No", "Date", "Mission", "Rocket", "Destination"];
  const displayHeader = () => {
    return tableHeader.map((title) => (
      <th key={title} className="is-secondary">
        {title}
      </th>
    ));
  };

  const displayBody = () => {
    dataState.sort((a, b) => a.rocketNumber - b.rocketNumber);
    return dataState.map((data) => {
      if (!data.upcoming) return null;
      return (
        <tr className="is-warning">
          <td>{data.rocketNumber}</td>
          <td>{data.launchDate}</td>
          <td>{data.mission}</td>
          <td>{data.rocket}</td>
          <td>{data.destination}</td>
        </tr>
      );
    });
  };

  return (
    <animated.div className="table-container" style={props}>
      <table className="nasa-main table is-striped is-hoverable">
        <thead>
          <tr>{displayHeader()}</tr>
        </thead>
        <tbody>{displayBody()}</tbody>
      </table>
    </animated.div>
  );
}
