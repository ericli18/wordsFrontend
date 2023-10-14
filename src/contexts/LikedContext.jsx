import { createContext, useReducer, useContext } from "react";

const likedReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKED":
      return action.payload;
    case "CLEAR_LIKED":
      return null;
    default:
      return state;
  }
}

const LikedContext = createContext();

export const LikedContextProvider = (props) => {
  const [liked, likedDispatch] = useReducer(likedReducer, null);

  return (
    <LikedContext.Provider value={[liked, likedDispatch]}>
      {props.children}
    </LikedContext.Provider>
  );
}

export const useLikedValue = () => {
  const likedAndDispatch = useContext(LikedContext);
  return likedAndDispatch[0];
}

export const useLikedDispatch = () => {
  const likedAndDispatch = useContext(LikedContext);
  return likedAndDispatch[1];
}

export default LikedContext;