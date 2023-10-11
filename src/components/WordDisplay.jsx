import { useQuery } from "@tanstack/react-query";
import wordService from "../services/words";
import Word from "./Word";
import { useDateValue } from "../contexts/DateContext";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LikedDisplay from "./liked/LikedDisplay";
import { useUserValue } from "../contexts/UserContext";

const WordDisplay = () => {
  const date = useDateValue();
  const user = useUserValue();

  const result = useQuery({
    queryKey: ["words"],
    queryFn: wordService.getAll,
  });

  if (result.isLoading) {
    return <div>fetching words</div>;
  }

  if (result.isError) {
    return <div>error</div>;
  }

  // result.data.forEach(word => {
  //   wordService.update({...word, accessDate: "0"})
  // })

  return (
    <div>
      <Routes>
        <Route path='/' element={<Word date={date} words={result.data} />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/words' element={<LikedDisplay user={user} />} />
      </Routes>
    </div>
  );
};

export default WordDisplay;
