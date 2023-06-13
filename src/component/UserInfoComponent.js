import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext";

import "./UserInfoComponent.css"
import {useNavigate} from "react-router-dom";

function UserInfoComponent() {
    const {user, isAuthenticated, setIsAuthenticated, progressLevelChanged, setProgressLevelChanged} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout() {
        console.log("logout");
        setIsAuthenticated(false);
        navigate("/login");
    }

    useEffect(() => {
        if (progressLevelChanged) {
            setTimeout(() => {
                setProgressLevelChanged(false);
            }, 5000);
        }
    }, [progressLevelChanged])

    if (isAuthenticated) {
        if (!progressLevelChanged) {
            return (
                <div id={"user-info-div"}>
                    <p>{user.username}</p>
                    <p>{user.progressLevel}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>

            )
        } else {
            return (
                <div id={"user-info-div"}>
                    <p>{user.username}</p>
                    <p>Your progress level changed! -> {user.progressLevel}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>

            )
        }
    }
}

export default UserInfoComponent;