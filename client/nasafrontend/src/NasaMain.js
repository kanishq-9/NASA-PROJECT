import Input from "./Input";

function NasaMain({dataState}) {
  return (
    <div className="nasa-main">
      <h1 className="title is-1 has-text-info is-family-code">
        NASA Mission Control
      </h1>
      <Input dataState={dataState}/>
    </div>
  );
}

export default NasaMain;
