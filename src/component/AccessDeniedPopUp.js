import './AccessDeniedPopUp.css'

function AccessDeniedPopUp(props) {
    return (props.trigger) ? (
        <div className={"popup"}>
            <div className={"popup-inner"}>
                <button onClick={() => props.closePopUp(true)} className={"close-btn"}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AccessDeniedPopUp;