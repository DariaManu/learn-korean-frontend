import './AccessDeniedPopUp.css'

function QuizAttemptSubmittedPopUp(props) {
    return (props.trigger) ? (
        <div className={"popup"}>
            <div className={"popup-inner"}>
                <button style={{backgroundColor: "white"}} onClick={() => props.setTrigger(false)} className={"close-btn"}>Close</button>
                {
                    props.quizPassed ? (
                        <div>
                            <p style={{backgroundColor: "white"}}>Congratulations, you passed the quiz!</p>
                            <p style={{backgroundColor: "white"}}>Score: {props.score}</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{backgroundColor: "white"}}>Study a bit more then come back later!</p>
                            <p style={{backgroundColor: "white"}}>Score: {props.score}</p>
                        </div>
                    )
                }
                {props.children}
            </div>
        </div>
    ) : "";
}

export default QuizAttemptSubmittedPopUp;