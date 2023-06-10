import {useEffect, useState} from "react";

import "./QuizHistoryListItem.css"

function QuizHistoryListItem(props) {
    const [quizAttempt] = useState(props.quizAttempt);
    const [index] = useState(props.index);
    const [showDetails, setShowDetails] = useState(false);
    const [detailsDiv, setDetailsDiv] = useState(null);

    useEffect(() => {
        let quizDetailsDiv = document.createElement("div");
        quizDetailsDiv.className = "quiz-details-div";

        let userAnswers = quizAttempt.userAnswers;
        let quizOrderedList = document.createElement("ol");
        for (let i = 0; i < userAnswers.length; i++) {
            let userAnswer = userAnswers[i];
            let givenAnswerIndex = userAnswer.givenAnswerIndex;
            let correct = userAnswer.correct;
            let question = userAnswer.question;
            let correctAnswerIndex = question.correctAnswerIndex;
            let questionOrderedListItem = document.createElement("li");
            //questionOrderedListItem.style.backgroundColor = "white";
            questionOrderedListItem.innerText = question.questionText;

            let questionAnswers = question.questionAnswers;
            let questionAnswersUnorderedList = document.createElement("ul");
            for(let j = 0; j < questionAnswers.length; j++) {
                let questionAnswer = questionAnswers[j];
                let questionAnswerUnorderedListItem = document.createElement("li");
                //questionAnswerUnorderedListItem.style.backgroundColor = "white";
                questionAnswerUnorderedListItem.innerText = questionAnswer.answerText;
                if (j === correctAnswerIndex) {
                    questionAnswerUnorderedListItem.innerText = questionAnswerUnorderedListItem.innerText + " - correct answer";
                }
                if (j === givenAnswerIndex) {
                    if (givenAnswerIndex === correctAnswerIndex) {
                        questionAnswerUnorderedListItem.style.backgroundColor = "green";
                    } else {
                        questionAnswerUnorderedListItem.style.backgroundColor = "red";
                    }
                }
                questionAnswersUnorderedList.appendChild(questionAnswerUnorderedListItem);
            }

            questionOrderedListItem.appendChild(questionAnswersUnorderedList);
            quizOrderedList.appendChild(questionOrderedListItem);
        }
        quizDetailsDiv.appendChild(quizOrderedList);
        setDetailsDiv(quizDetailsDiv);
    }, [quizAttempt, index]);

    const handleShowDetails = (event) => {
        if (showDetails === true) {
            document.getElementById(`attempt${index+1}`).replaceChildren();
            setShowDetails(false);
        } else {
            document.getElementById(`attempt${index+1}`).appendChild(detailsDiv);
            setShowDetails(true);
        }
    }

    return (
        <div className={"quiz-history-list-item"}>
            <h2 onClick={handleShowDetails}>
                Attempt {index+1} {(quizAttempt.quizPassed === true) ? "passed" : "failed"} -> Score: {quizAttempt.score}
            </h2>
            <div id={`attempt${index+1}`}></div>
        </div>
    )
}

export default QuizHistoryListItem;