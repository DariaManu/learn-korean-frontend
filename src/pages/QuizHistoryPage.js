import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";

import axios from "axios";
import QuizHistoryListItem from "../component/QuizHistoryListItem";
import UserInfoComponent from "../component/UserInfoComponent";

import "./QuizHistoryPage.css"
import NavigationBarComponent from "../component/NavigationBarComponent";

const quizHistoryBaseUrl = "http://localhost:8083/quiz/history";

function QuizHistoryPage() {
    const {moduleName} = useParams();
    const {user} = useContext(UserContext);
    const [quizAttempts, setQuizAttempts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${quizHistoryBaseUrl}/${moduleName}/${user.id}`)
            .then(function (response) {
                console.log(response.data);
                setQuizAttempts(response.data);
            }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <NavigationBarComponent/>

            <div id={"quiz-history-div"}>
                {
                    !(quizAttempts.length === 0) && (
                        quizAttempts.map((quizAttempt, index) => (
                            <QuizHistoryListItem quizAttempt={quizAttempt} index={index}/>
                        ))
                    )
                }
                <button onClick={() => navigate("/learn-korean/learning")}>Back to Learning page</button>
            </div>
        </div>
    )
}

export default QuizHistoryPage;