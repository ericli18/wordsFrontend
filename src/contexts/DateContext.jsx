import { createContext, useReducer, useContext } from "react";
import dayjs from "dayjs";

const changeDate = (date, change) => {
  if (change === 1) return dayjs(date).add(1, "d");
  else if (change === -1) return dayjs(date).subtract(1, "d");
};

const dateReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return changeDate(state, 1);
    case "DEC":
      return changeDate(state, -1);
    case "SET":
      return action.data;
    case "ZERO":
      return dayjs();
  }
};

const DateContext = createContext();

export const DateContextProvider = (props) => {
  const [date, dateDispatch] = useReducer(dateReducer, dayjs());

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
