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
              <h1>Welcome to LearnKorean!</h1>
              <p>
                  Learn Korean was developed as a passion project to help people study Korean in a fun way, while also
                  putting an emphasis on cultural aspects that make Korea and the Korean language so intriguing fo so
                  many people. I hope you have fun and good luck with studying! :D
              </p>
          </div>
      </div>
    );
}

export default HomePage;