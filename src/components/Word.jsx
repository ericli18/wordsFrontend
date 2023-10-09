import parse from "html-react-parser";
import WordHeader from "./WordHeader";
import { randomWord } from "./wordHelper";


const Word = ({words, date}) => {

  const selectedWord = randomWord(words, date);
    const handleEtymology = () => {
        if (selectedWord) {
            return parse(selectedWord.etymology);
        }
        return null;
    };

    if(selectedWord.accessDate == 0 )
    {
      const id = selectedWord.id;
      wordService.update(id, {...selectedWord, accessDate: dayjs(date).format()}).then(() => {
        queryClient.invalidateQueries("words");
      }
      );
    }

    return (
        <div>
          <WordHeader />
          <div className='word'>
              <div className='important'>
                  <div className='magic important'>
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
        </div>
    );
};
export default Word;
