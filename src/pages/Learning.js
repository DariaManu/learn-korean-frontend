import NavigationBar from "../component/NavigationBar";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

import './learning-style.css'

import axios from "axios";
import AccessDeniedPopUp from "../component/AccessDeniedPopUp";

const learningBaseUrl = " http://localhost:8083";

const ERR_UNAUTHORIZED = 401;

function Learning() {
    const {user} = useContext(UserContext);
    const [learningModuleNames, setLearningModuleNames] = useState([]);
    const [moduleAccess, setModuleAccess] = useState(true);

    useEffect(() => {
      console.log("fetch learning module names");
      console.log(`${learningBaseUrl}/module`);
      axios.get(`${learningBaseUrl}/module`)
          .then(function(response) {
              let data = response.data;
              console.log(data);
              setLearningModuleNames(data);
          }).catch(function(error) {
              console.log(error)
      });
    }, []);

    const handleClickOnModuleName = (event) => {
        console.log("click on module name");
        let moduleName = event.target.innerText;
        console.log(moduleName);
        axios.post(`${learningBaseUrl}/module`, {
            learningModuleName: moduleName,
            userProgressLevel: user.progressLevel
        }).then(function(response) {
            console.log(response.status);
        }).catch(function(error) {
            console.log(error.response.status);
            if (error.response.status === ERR_UNAUTHORIZED) {
                setModuleAccess(false);
            }
        })
    }

    return (
        <div>
            <UserInfoComponent user={user}/>
            <NavigationBar/>
            {
                !(learningModuleNames.length === 0) ? (
                    learningModuleNames.map((name) => {
                        return <p onClick={handleClickOnModuleName} className={"module-name"}>{name}</p>
                    })
                ) : (
                    <p>Learning</p>
                )
            }
            <AccessDeniedPopUp trigger={!moduleAccess} closePopUp={setModuleAccess}>
                <h2>You don't have access to this module yet!</h2>
            </AccessDeniedPopUp>
        </div>
    )
}

export default Learning;