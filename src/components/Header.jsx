const Header = ({ showAll }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  console.log(date);

  return (
    <header>
      <h1>
        Sorrow of the Day: {month} {day}, {year}
      </h1>
      {/* <p onClick={showAll}>Show All</p> */}
    </header>
  );
};

export default Header;
