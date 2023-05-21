import {useState} from "react";
import {UserContext} from "./UserContext";

function AuthProvider(props) {
    const [user, setUser] = useState({
        id: null,
        username: null,
        progressLevel: null
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider;