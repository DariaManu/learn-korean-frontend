import NavigationBar from "../component/NavigationBar";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

function HomePage() {
    const {user} = useContext(UserContext);

    return (
      <div>
          <UserInfoComponent user={user}/>
          <NavigationBar/>
          <p>Welcome!</p>
      </div>
    );
}

export default HomePage;