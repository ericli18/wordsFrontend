import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import userService from "../services/user";
import wordService from "../services/words";
import { useEffect, useState } from "react";
const Heart = ({ selectedUser, selectedWord }) => {
  const [likedWords, setLikedWords] = useState([]);
  useEffect(() => {
    const getWords = async () => {
      try {
        const words = await userService.getWords(selectedUser.id);
        setLikedWords(words.map((word) => word.id));
      } catch (exception) {
        console.log(exception);
      }
    };
    if (selectedUser !== null) {
      getWords();
    }
  }, [selectedUser]);

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
    await wordService.update({
      ...selectedWord,
      likes: selectedWord.likes + 1,
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
    await wordService.update({
      ...selectedWord,
      likes: selectedWord.likes - 1,
    });

    setLikedWords(newWords);
  };

  const filledHeart = () => (
    <AiFillHeart className='heart' onClick={unlikeWord} />
  );

  const emptyHeart = () => (
    <AiOutlineHeart className='heart' onClick={likeWord} />
  );

  const liked = likedWords.includes(selectedWord.id);

  return <div>{liked ? filledHeart() : emptyHeart()}</div>;
};

export default Heart;
