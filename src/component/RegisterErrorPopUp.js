import "./RegisterErrorPopUp.css"

function RegisterErrorPopUp(props) {
    return (props.trigger) ? (
        <div className={"popup"}>
            <div className={"popup-inner"}>
                <button style={{backgroundColor: "white"}} onClick={() => props.setTrigger(false)} className={"close-btn"}>Close</button>
                {<div>
                    <p style={{backgroundColor: "white"}}>{props.errorMessage}</p>
                </div>}
                {props.children}
            </div>
        </div>
    ) : "";
}

export default RegisterErrorPopUp;