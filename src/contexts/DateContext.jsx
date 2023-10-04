import { createContext, useReducer, useContext } from "react";
import dayjs from "dayjs";

const changeDate = (date, change) => {
  if (
    date < dayjs().startOf('d') &&
    change === 1
  )
    return dayjs().add(1, 'd');
  else if (date > dayjs(new Date(2023, 2, 27)) && change === -1)
    return dayjs().subtract(1, 'd');
};

const dateReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return changeDate(state, 1);
    case "DEC":
      return changeDate(state, -1);
    case "ZERO":
      return new Date();
  }
};

const DateContext = createContext();

export const DateContextProvider = (props) => {
  const [date, dateDispatch] = useReducer(dateReducer, new Date());

  return (
    <DateContext.Provider value={[date, dateDispatch]}>
      {props.children}
    </DateContext.Provider>
  );
};

export const useDateValue = () => {
  const dateAndDispatch = useContext(DateContext);
  return dateAndDispatch[0];
};

export const useDateDispatch = () => {
  const dateAndDispatch = useContext(DateContext);
  return dateAndDispatch[1];
};

export default DateContext;
