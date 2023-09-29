import { createContext, useReducer, useContext } from "react";

const changeDate = (date, change) => {
  const subtract = 24 * 60 * 60 * 1000;
  if (
    date < new Date().setTime(new Date().getTime() - subtract) &&
    change === 1
  )
    return (new Date(date.setDate(date.getDate() + change)));
  else if (date > new Date(2023, 2, 27) && change === -1)
    return (new Date(date.setDate(date.getDate() + change)));
};

const dateReducer = ( state = new Date(), action ) => {
  switch (action.type) {
    case "INC":
      return changeDate(state, 1)
    case "DEC":
      return changeDate(state, -1)
    case "ZERO":
      return new Date()
  }
}

const DateContext = createContext()

export const DateContextProvider = (props) => {
  const [date, dateDispatch] = useReducer(dateReducer, 0)

  return (
    <DateContext.Provider value={[date, dateDispatch] }>
      {props.children}
    </DateContext.Provider>
  )
}

export const useDateValue = () => {
  const dateAndDispatch = useContext(DateContext)
  return dateAndDispatch[0]
}

export const useCounterDispatch = () => {
  const dateAndDispatch = useContext(DateContext)
  return dateAndDispatch[1]
}

export default CounterContext