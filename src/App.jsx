import { useState, useEffect } from "react";
import wordService from "./services/words";
import userService from "./services/user";
import WordHeader from "./components/WordHeader";
import Header from "./components/Header";
import Word from "./components/Word";

const App = () => {
    const [words, setWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState(null);
    const [likedWords, setLikedWords] = useState([]);
    const [date, setDate] = useState(new Date());
    const [user, setUser] = useState(null);

    useEffect(() => {
        wordService.getAll().then((initialWords) => {
            setWords(initialWords);
        });
    }, []);

    useEffect(() => {
        const tempUser = window.localStorage.getItem("loggedUser");
        if (tempUser !== null) {
            const user = JSON.parse(tempUser);
            setUser(user);
            wordService.setToken(user.token);
        }
    }, []);

    useEffect(() => {
        if (words.length > 0) {
            setSelectedWord(hashDate(date));
        }
    }, [words, date]);

    useEffect(() => {
        const getWords = async () => {
            try {
                const words = await userService.getWords(user.id);
                setLikedWords(words.map((word) => word.id));
            } catch (exception) {
                console.log(exception);
            }
        };

        if (user !== null) {
            getWords();
        }
    }, [user]);

    const hashDate = (date) => {
        const id = (date.getDate() + date.getMonth() + date.getFullYear()) * 15;
        let counter = id % words.length;
        while (words[counter].dateAccessed == 0) {
            //will decide whether or not to implement later
            counter++;
        }
        const temp = words[counter];
        return temp;
    };

    const changeDate = (date, change) => {
        const subtract = 24 * 60 * 60 * 1000;
        //bro this is so jank
        if (
            date < new Date().setTime(new Date().getTime() - subtract) &&
            change === 1
        )
            setDate(new Date(date.setDate(date.getDate() + change)));
        else if (date > new Date(2023, 2, 27) && change === -1)
            setDate(new Date(date.setDate(date.getDate() + change)));
    };

    return (
        <div>
            <Header user={user} setUser={setUser} />
            <WordHeader dateIn={date} changeDate={changeDate} />
            <Word
                selectedUser={user}
                selectedWord={selectedWord}
                likedWords={likedWords}
                setLikedWords={setLikedWords}
            />
        </div>
    );
};

export default App;
