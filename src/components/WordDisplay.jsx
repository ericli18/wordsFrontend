import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import wordService from "../services/words";

const WordDisplay = () => {
  const queryClient = useQueryClient();

  const words = useQuery({
    queryKey: ["words"],
    queryFn: wordService.getAll,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    staleTime: 1000 * 60 * 5,
  });

  if (words.isLoading) {
    return <div>fetching words</div>;
  }

  if (words.isError) {
    return <div>error</div>;
  }

  console.log(words.data[0]);
};

export default WordDisplay;
