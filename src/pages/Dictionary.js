import NavigationBarComponent from "../component/NavigationBarComponent";
import {useContext, useEffect, useState} from "react";

import axios from "axios";
import WordTranslationItem from "../component/WordTranslationItem";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

import "./Dictionary.css"

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
            <NavigationBarComponent/>
            <div id={"dictionary-div"}>
                <form>
                    <input id={"search-word-input"} type={"text"} placeholder={"Search for a word"} onChange={e => setWord(e.target.value)}/>
                    <button id={"search-word-button"} onClick={handleSearch}>Search</button>
                </form>
                {
                    !(translations.length === 0) ? (
                        translations.map((translation) => {
                            return <WordTranslationItem props={translation}/>
                        })
                    ) : ""
                }
            </div>
        </div>
    )
}

export default Dictionary;
