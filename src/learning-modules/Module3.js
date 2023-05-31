import {useNavigate} from "react-router-dom";

function Module3(props) {
    console.log(props.moduleName);
    const moduleName = props.moduleName;
    const navigate = useNavigate();

    return (
        <div>{moduleName}</div>
    )
}

export default Module3;