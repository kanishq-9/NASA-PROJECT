export default function NavBar({ handleMenuChange }) {
  const navTitles = ["Launch", "Upcoming", "History"];
  const handleClick = (title) => {
    handleMenuChange(title);
  };

  const renderTitle = navTitles.map((title) => {
    return (
      <span className="navbar-content" onClick={() => handleClick(title)}>
        {title}
      </span>
    );
  });
  return (
    <div className="nav-bar title is-4 has-text-warning">{renderTitle}</div>
  );
}
