import NavigationBarComponent from "../component/NavigationBarComponent";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

import "./HomePage.css"

function HomePage() {
    const {user} = useContext(UserContext);

    return (
      <div>
          <NavigationBarComponent/>
          <div id={"welcome-message"}>
            <p>Welcome!</p>
          </div>
      </div>
    );
}

export default HomePage;