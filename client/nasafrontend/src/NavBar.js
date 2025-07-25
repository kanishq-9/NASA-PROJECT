export default function NavBar({ handleMenuChange }) {
  const navTitles = [{id:1,message:"Launch"},{id:2,message:"Upcoming"},{id:3,message:"History"}];
  const handleClick = (title) => {
    handleMenuChange(title);
  };

  const renderTitle = navTitles.map((title) => {
    return (
      <span key={title.id} className="navbar-content" onClick={() => handleClick(title.message)}>
        {title.message}
      </span>
    );
  });
  return (
    <div className="nav-bar title is-4 has-text-warning">{renderTitle}</div>
  );
}
