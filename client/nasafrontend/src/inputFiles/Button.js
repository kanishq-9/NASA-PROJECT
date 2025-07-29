export default function Button({ postLaunchDataFunction, missionData }) {
  const launchMission = function () {
    postLaunchDataFunction(missionData);
  };
  return (
    <div>
      <button className="mt-5 button is-success" onClick={launchMission}>
        LAUNCH
      </button>
    </div>
  );
}
