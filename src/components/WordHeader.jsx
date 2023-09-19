import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const WordHeader = ({ changeDate, dateIn }) => {
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
  let month = monthNames[date.getMonth()];

  if (screen.width < 800) month = month.substring(0, 3);
  const year = date.getFullYear();

  const checkRight = () => {
    const subtract = 24 * 60 * 60 * 1000;
    if (date < new Date().setTime(new Date().getTime() - subtract))
      return (
        <AiOutlineArrowRight
          className="arrow"
          onClick={() => changeDate(date, 1)}
        />
      );
    else return null;
  };

  const checkLeft = () => {
    if (date > new Date(2023, 2, 27))
      return (
        <AiOutlineArrowLeft
          className="arrow"
          onClick={() => changeDate(date, -1)}
        />
      );
    else return null;
  };

  return (
    <header>
      <div className="headerLeft">{checkLeft()}</div>

      <div className="headerCenter">
        <h1>
          {month} {day}, {year}
        </h1>
      </div>
      <div className="headerRight">{checkRight()}</div>
    </header>
  );
};

export default WordHeader;
