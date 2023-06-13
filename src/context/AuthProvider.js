import {useEffect, useState} from "react";
import {UserContext} from "./UserContext";

import SockJS from "sockjs-client"
import {Stomp} from "stompjs/lib/stomp";

function AuthProvider(props) {
    const [user, setUser] = useState({
        id: null,
        username: null,
        progressLevel: null
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [progressLevelChanged, setProgressLevelChanged] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            var Stomp = require("stompjs/lib/stomp.js").Stomp
            let socket = new WebSocket("ws://localhost:8085/notifications")
            const client = Stomp.over(socket)
            client.connect({}, function(frame) {
                console.log("connected");
                client.subscribe(`/user/${user.id}/progress-level-changed`, function(response) {
                    console.log(response.body);
                    let id = user.id;
                    let username = user.username;
                    setUser({
                        id: id,
                        username: username,
                        progressLevel: response.body
                    });
                    setProgressLevelChanged(true);
                })
            })
        }
    }, [isAuthenticated]);

    return (
        <UserContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated, progressLevelChanged, setProgressLevelChanged}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProvider;