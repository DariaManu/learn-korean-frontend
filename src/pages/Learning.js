import NavigationBar from "../component/NavigationBar";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

function Learning() {
    const {user} = useContext(UserContext);

    return (
        <div>
            <UserInfoComponent user={user}/>
            <NavigationBar/>
            <p>Learning</p>
        </div>
    )
}

export default Learning;