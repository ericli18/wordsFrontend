import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import wordService from '../services/words'

const WordDisplay = () => {
    const queryClient = useQueryClient()

    const words = useQuery({queryKey: ['words'], queryFn: wordService.getAll})

    if(words.isLoading)
    {
        return (
            <div>
                fetching words
            </div>
        )
    }

    console.log(words.data)

};

export default WordDisplay;
