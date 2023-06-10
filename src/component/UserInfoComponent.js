import {useContext} from "react";
import {UserContext} from "../context/UserContext";

import "./UserInfoComponent.css"

function UserInfoComponent() {
    const {user, isAuthenticated} = useContext(UserContext);

    function handleLogout() {
        console.log("logout");
    }

    return (
        isAuthenticated && (
            <div id={"user-info-div"}>
                <p>{user.username}</p>
                <p>{user.progressLevel}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    )
}

export default UserInfoComponent;