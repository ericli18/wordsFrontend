import { useQuery } from "@tanstack/react-query";
import wordService from "../services/words";
import Word from "./Word";
import { useDateValue } from "../contexts/DateContext";
import { Routes, Route, useMatch } from "react-router-dom";
import Login from "./Login";
import LikedDisplay from "./liked/LikedDisplay";
import { useUserValue } from "../contexts/UserContext";
import About from "./About";

const WordDisplay = () => {
  const date = useDateValue();
  const user = useUserValue();
  const match = useMatch("/words/:id");
  const paramId = match?.params.id;

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

  const paramDate = result.data.find((word) => word.id === paramId)?.accessDate;
  return (
    <div>
      <Routes>
        <Route path='/words/:id' element={<Word date={paramDate} words={result.data} />} />
        <Route path='/' element={<Word date={date} words={result.data} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/words' element={<LikedDisplay user={user} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default WordDisplay;
