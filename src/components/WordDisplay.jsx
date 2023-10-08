import { useQuery, useMutation } from "@tanstack/react-query";
import wordService from "../services/words";
import Word from "./Word";
import { randomWord } from "./wordHelper";
import dayjs from "dayjs";
import { useDateValue } from "../contexts/DateContext";

const WordDisplay = () => {
  const date = useDateValue();

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

  const word = randomWord(data, date);
  if(word.accessDate == 0 )
  {
    const id = word.id;
    wordService.update(id, {...word, accessDate: dayjs(date).format()});
  }

  return (
    <div>
      <Word selectedWord={word} />
    </div>
  )
};

export default WordDisplay;
