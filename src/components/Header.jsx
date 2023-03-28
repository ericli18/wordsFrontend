import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
const Header = ({ changeDate, dateIn }) => {
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

  const date = dateIn || new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return (
    <header>
      <AiOutlineArrowLeft className="arrow" onClick={() => changeDate(date, -1)} />
      <h1>
        {month} {day}, {year}
      </h1>
      <AiOutlineArrowRight className="arrow" onClick={() => changeDate(date, 1)} />
      {/* <p onClick={showAll}>Show All</p> */}
    </header>
  );
};

export default Header;
