import { useQuery } from "@tanstack/react-query";
import wordService from "../services/words";
import Word from "./Word";
import { randomWord } from "./wordHelper";
import dayjs from "dayjs";

const WordDisplay = () => {
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
      <Word selectedWord={randomWord(data, dayjs().format())} />
    </div>
  )
};

export default WordDisplay;
