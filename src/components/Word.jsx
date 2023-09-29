import parse from "html-react-parser";
import userService from "../services/user";
import wordService from "../services/words";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Word = ({selectedWord}) => {
    console.log(selectedWord)
    const handleEtymology = () => {
        if (selectedWord) {
            return parse(selectedWord.etymology);
        }
        return null;
    };

    // const likeWord = async (event) => {
    //     event.preventDefault();
    //     const id = selectedUser.id;
    //     const user = await userService.getUser(id);
    //     user.words = user.words.map((word) => word.id);
    //     const newWords = user.words.concat(selectedWord.id);
    //     const newUser = {
    //         ...user,
    //         words: newWords,
    //     };
    //     await userService.update(id, newUser);
    //     await wordService.update(selectedWord.id, {
    //         ...selectedWord,
    //         likes: 0,
    //     });
    //     setLikedWords(newWords);

    // };

    // const unlikeWord = async (event) => {
    //     event.preventDefault();
    //     const id = selectedUser.id;
    //     const user = await userService.getUser(id);
    //     user.words = user.words.map((word) => word.id);
    //     const newWords = user.words.filter((word) => word != selectedWord.id);
    //     const newUser = {
    //         ...user,
    //         words: newWords,
    //     };
    //     await userService.update(id, newUser);
    //     await wordService.update(selectedWord.id, {
    //       ...selectedWord,
    //       likes: 0,
    //   });

    //     setLikedWords(newWords);

    // };

    // const checkLiked = (id) => {
    //     if (likedWords.includes(id)) {
    //         return true;
    //     }
    //     return false;
    // };

    // const filledHeart = () => (
    //     <AiFillHeart className='heart' onClick={unlikeWord} />
    // );

    // const emptyHeart = () => (
    //     <AiOutlineHeart className='heart' onClick={likeWord} />
    // );

    return (
        <div className='word'>
            <div className='important'>
                <div className='magic'>
                    <h1 className='text'>
                        {selectedWord?.word}
                    </h1>
                </div>
            </div>
            <div className='info'>
                <p>{selectedWord?.definition}</p>
                <div>{handleEtymology()}</div>
            </div>
        </div>
    );
};
export default Word;
