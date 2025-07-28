export default function Upcoming() {
  const tableHeader = ["No", "Date", "Mission", "Rocket", "Destination"];
  const displayHeader = () => {
    return tableHeader.map((title) => (
      <th key={title} className="is-primary">
        {title}
      </th>
    ));
  };
  return (
    <div className="table-container">
      <table className="nasa-main table is-striped is-hoverable">
        <thead>
          <tr>{displayHeader()}</tr>
        </thead>
      </table>
    </div>
  );
}
