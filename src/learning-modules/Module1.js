import {useNavigate} from "react-router-dom";

function Module1(props) {
    console.log(props.moduleName);
    const moduleName = props.moduleName;
    const navigate = useNavigate();

    return (
        <div>
            <p>text to be added later</p>

            <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz`)}>Take quiz</button>
            <button>Show quiz history</button>
        </div>
    )
}

export default Module1;