export default function History() {
  const tableHeader = ["No", "Date", "Mission", "Rocket", "Customer"];
  const displayHeader = () => {
    return tableHeader.map((title) => (
      <th key={title} className="is-secondary">
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
