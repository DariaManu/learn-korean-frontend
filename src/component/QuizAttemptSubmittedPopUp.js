import './AccessDeniedPopUp.css'

function QuizAttemptSubmittedPopUp(props) {
    return (props.trigger) ? (
        <div className={"popup"}>
            <div className={"popup-inner"}>
                <button onClick={() => props.setTrigger(false)} className={"close-btn"}>close</button>
                {
                    props.quizPassed ? (
                        <div>
                            <p>Congratulations, you passed the quiz!</p>
                            <p>Score: {props.score}</p>
                        </div>
                    ) : (
                        <div>
                            <p>Study a bit more then come back later!</p>
                            <p>Score: {props.score}</p>
                        </div>
                    )
                }
                {props.children}
            </div>
        </div>
    ) : "";
}

export default QuizAttemptSubmittedPopUp;