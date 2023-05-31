import {useContext} from "react";
import {UserContext} from "../context/UserContext";

function UserInfoComponent() {
    const {user, isAuthenticated} = useContext(UserContext);

    return (
        isAuthenticated && (
            <div>
                <p>{user.username}</p>
                <p>{user.progressLevel}</p>
            </div>
        )
    )
}

export default UserInfoComponent;