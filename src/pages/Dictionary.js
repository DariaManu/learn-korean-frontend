import NavigationBar from "../component/NavigationBar";
import {useContext, useEffect, useState} from "react";

import axios from "axios";
import WordTranslationItem from "../component/WordTranslationItem";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

const dictionaryBaseUrl = "http://localhost:8081/vocabulary";

function Dictionary() {
    const [word, setWord] = useState("");
    const [translations, setTranslations] = useState([]);
    const {user} = useContext(UserContext);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(word);
        console.log(`${dictionaryBaseUrl}/${word}`);
        axios.get(`${dictionaryBaseUrl}/${word}`)
            .then(function (response) {
                let data = response.data;
                setTranslations(data);
            }).catch(function (error) {
                console.log(error);
        });
    }

    return (
        <div>
            <NavigationBar/>
            <form>
                <input type={"text"} placeholder={"Search for a word"} onChange={e => setWord(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </form>
            {
                !(translations.length === 0) ? (
                    translations.map((translation) => {
                        return <WordTranslationItem props={translation}/>
                    })
                ) : (
                    <div>Nothing to show</div>
                )
            }
        </div>
    )
}

export default Dictionary;
