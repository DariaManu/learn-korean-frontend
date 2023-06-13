import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import axios from "axios";
import UserInfoComponent from "../component/UserInfoComponent";
import {UserContext} from "../context/UserContext";
import QuizAttemptSubmittedPopUp from "../component/QuizAttemptSubmittedPopUp";
import NavigationBarComponent from "../component/NavigationBarComponent";

import "./QuizPage.css"

const quizBaseUrl = "http://localhost:8083/quiz";

function QuizPage() {
    const {moduleName} = useParams();
    const [questions, setQuestions] = useState([]);
    const [allowSubmitAttempt, setAllowSubmitAttempt] = useState(true);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizPassed, setQuizPasses] = useState(false);
    const [score, setScore] = useState(0);

    const {user} = useContext(UserContext);

    useEffect(() => {
        axios.get(`${quizBaseUrl}/questions/${moduleName}`)
            .then(function (response) {
                let qs = response.data;
                console.log(qs);
                for (let i = 0; i < qs.length; i++) {
                    console.log("iterate");
                    let question = qs[i];
                    console.log(question);
                }
                setQuestions(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    }, [moduleName]);

    useEffect(() => {
        if (!(questions.length === 0)) {
            //get the form element from the document body; we will append to it the questions and answers of the quiz
            let form = document.getElementById("quiz");

            //clear all previous elements in form
            form.replaceChildren();

            for (let i = 0; i < questions.length; i++) {
                //get the current question
                let question = questions[i];
                //create a div element that will contain the question text and question answers
                let questionDiv = document.createElement("div");
                questionDiv.className = "question-div";
                //create a p element for the question text and set the innerText attribute of the p element to be the question text
                let questionText = document.createElement("p");
                questionText.innerText = question.questionText;
                //append the question text to the question div
                questionDiv.appendChild(questionText);

                //get all question answers of a question
                let questionAnswers = question.questionAnswers;
                for (let j = 0; j < questionAnswers.length; j++) {
                    //get current question answer
                    let questionAnswer = questionAnswers[j];

                    //create a radio type input for each question answer
                    let questionAnswerRadio = document.createElement("input");
                    questionAnswerRadio.type = "radio";
                    questionAnswerRadio.id=`question${i}answer${j}`;
                    questionAnswerRadio.name=`question${i}`;
                    questionAnswerRadio.value=`${j}`;

                    //create a label type element for each question answer
                    let questionAnswerLabel = document.createElement("label");
                    questionAnswerLabel.for = `question${i}answer${j}`;
                    questionAnswerLabel.innerText = questionAnswer.answerText;

                    //append the created elements
                    questionDiv.appendChild(questionAnswerRadio);
                    questionDiv.appendChild(questionAnswerLabel);
                    questionDiv.appendChild(document.createElement("br"));
                }

                //append the question div to the form
                form.appendChild(questionDiv);
            }

        }
    }, [questions]);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log("submit form");

        let userAnswers = [];
        let form = document.getElementById("quiz");
        let questionDivs = form.children;
        for (let i = 0; i < questionDivs.length; i++) {
            let questionDiv = questionDivs[i];
            let questionAnswersRadios = questionDiv.querySelectorAll('input');
            let givenAnswerIndex = -1;
            for (let j = 0; j < questionAnswersRadios.length; j++) {
                let questionAnswerRadio = questionAnswersRadios[j];
                if (questionAnswerRadio.checked) {
                    givenAnswerIndex = j;
                }
            }

            let userAnswer = {"question": questions[i], "givenAnswerIndex": givenAnswerIndex};
            userAnswers.push(userAnswer);
        }

        let quizAttempt = {
            "userId": user.id,
            "learningModuleName": moduleName,
            "userAnswers": userAnswers
        }
        console.log(quizAttempt);
        axios.post(`${quizBaseUrl}/attempt`, quizAttempt)
            .then(function(response) {
                console.log(response.data)
                let submitResponse = response.data;
                setAllowSubmitAttempt(false);
                setQuizPasses(submitResponse.quizPassed);
                setScore(submitResponse.score);
                setQuizSubmitted(true);
            }).catch(function(error) {
                console.log(error);
        });
    }

    return (
        <div>
            <NavigationBarComponent/>

            <div id={"quiz-div"}>
                <form id={"quiz"}>
                </form>
                {
                    allowSubmitAttempt ? (
                        <button onClick={handleSubmitForm}>Submit</button>
                    ) : (
                        <Link id={"back-to-learning-link"} to={"/learn-korean/learning"}>Back to Learning Page</Link>
                    )
                }
                <QuizAttemptSubmittedPopUp trigger={quizSubmitted} setTrigger={setQuizSubmitted} quizPassed={quizPassed} score={score}>
                </QuizAttemptSubmittedPopUp>
            </div>

        </div>
    );
}

export default QuizPage;