import "./css/error-style.css";
export default function ErrorPopUp({ message, handleSetError }) {
  function handleErrorFalse() {
    handleSetError(false);
  }
  return (
    <span id="error">
      ⚠️ {message}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="button is-info is-small" onClick={handleErrorFalse}>
        close
      </button>
    </span>
  );
}
