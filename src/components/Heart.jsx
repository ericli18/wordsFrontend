import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import userService from "../services/user";
import wordService from "../services/words";
import { useMutation, useQueryClient } from "react-query";
const Heart = () => {
  const queryClient = useQueryClient();

  const likeWordMutation = useMutation(wordService.likeWord, {
    onSuccess: (newWord) => {
      const words = queryClient.getQueryData("words");
      const updatedWords = words.map((word) =>
        word.id === newWord.id ? newWord : word
      );
      queryClient.setQueryData("words", updatedWords);
    },
  });

  const likeWord = async (event) => {
    event.preventDefault();
    const id = selectedUser.id;
    const user = await userService.getUser(id);
    user.words = user.words.map((word) => word.id);
    const newWords = user.words.concat(selectedWord.id);
    const newUser = {
      ...user,
      words: newWords,
    };
    await userService.update(id, newUser);
    await wordService.update(selectedWord.id, {
      ...selectedWord,
      likes: 0,
    });
    setLikedWords(newWords);
  };

  const unlikeWord = async (event) => {
    event.preventDefault();
    const id = selectedUser.id;
    const user = await userService.getUser(id);
    user.words = user.words.map((word) => word.id);
    const newWords = user.words.filter((word) => word != selectedWord.id);
    const newUser = {
      ...user,
      words: newWords,
    };
    await userService.update(id, newUser);
    await wordService.update(selectedWord.id, {
      ...selectedWord,
      likes: 0,
    });

    setLikedWords(newWords);
  };

  const filledHeart = () => (
    <AiFillHeart className='heart' onClick={unlikeWord} />
  );

  const emptyHeart = () => (
    <AiOutlineHeart className='heart' onClick={likeWord} />
  );
};

export default Heart;
