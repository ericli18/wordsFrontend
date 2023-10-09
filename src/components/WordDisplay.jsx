import { useQuery, useQueryClient } from "@tanstack/react-query";
import wordService from "../services/words";
import Word from "./Word";
import { randomWord } from "./wordHelper";
import dayjs from "dayjs";
import { useDateValue } from "../contexts/DateContext";
import { Routes, Route, useMatch } from "react-router-dom";
import LoginForm from "./LoginForm";
import LikedDisplay from "./liked/LikedDisplay";
import { useUserValue } from "../contexts/UserContext";

const WordDisplay = () => {
  const date = useDateValue();
  const user = useUserValue();
  const queryClient = useQueryClient();

  
  const {isLoading, isError, data} = useQuery({
    queryKey: ["words"],
    queryFn: wordService.getAll,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>fetching words</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Word date={date} words={data} />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/words' element={<LikedDisplay user={user} />} />
      </Routes>
    </div>
  )
};

export default WordDisplay;
