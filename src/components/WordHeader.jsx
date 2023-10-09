import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDateValue, useDateDispatch } from "../contexts/DateContext";
import dayjs from "dayjs";

const WordHeader = () => {
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

  const dispatch = useDateDispatch();
  const date = dayjs(useDateValue());

  const day = date.date();
  let month = monthNames[date.month()];
  const today = dayjs();

  if (screen.width < 800) month = month.substring(0, 3);
  const year = date.year();
  // console.log(date.isSame(today, 'd'))

  const checkRight = () => {
    if (date.isBefore(today, "d"))
      return (
        <AiOutlineArrowRight
          className='arrow'
          onClick={() => dispatch({ type: "INC" })}
        />
      );
    else return null;
  };

  const checkLeft = () => {
    if (date.isAfter(dayjs("2023-09-29"), "d"))
      return (
        <AiOutlineArrowLeft
          className='arrow'
          onClick={() => dispatch({ type: "DEC" })}
        />
      );
    else return null;
  };

  return (
    <header>
      <div className='headerLeft'>{checkLeft()}</div>
      <div className='headerCenter'>
        <h1>
          {month} {day}, {year}
        </h1>
      </div>
      <div className='headerRight'>{checkRight()}</div>
    </header>
  );
};

export default WordHeader;
