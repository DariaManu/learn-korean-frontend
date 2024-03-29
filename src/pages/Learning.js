import NavigationBarComponent from "../component/NavigationBarComponent";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import UserInfoComponent from "../component/UserInfoComponent";

import './Learning.css'

import axios from "axios";
import AccessDeniedPopUp from "../component/AccessDeniedPopUp";
import {useNavigate} from "react-router-dom";

const learningBaseUrl = " http://localhost:8083";

const ERR_UNAUTHORIZED = 401;

function Learning() {
    const {user} = useContext(UserContext);
    const [learningModuleNames, setLearningModuleNames] = useState([]);
    const [moduleAccess, setModuleAccess] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      console.log("fetch learning module names");
      console.log(`${learningBaseUrl}/modules`);
      axios.get(`${learningBaseUrl}/modules`)
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
        axios.post(`${learningBaseUrl}/modules`, {
            learningModuleName: moduleName,
            learnerUserId: user.id
        }).then(function(response) {
            console.log(response.status);
            navigate(`/learn-korean/learning/${moduleName}`)
        }).catch(function(error) {
            console.log(error.response.status);
            if (error.response.status === ERR_UNAUTHORIZED) {
                setModuleAccess(false);
            }
        })
    }

    return (
        <div>
            <NavigationBarComponent/>
            <div id={"learning-div"}>
                {
                    !(learningModuleNames.length === 0) ? (
                        learningModuleNames.map((name) => {
                            return <p onClick={handleClickOnModuleName} className={"module-name"}>{name}</p>
                        })
                    ) : ""
                }
                <br/>
                <AccessDeniedPopUp trigger={!moduleAccess} closePopUp={setModuleAccess}>
                    <h2>You don't have access to this module yet!</h2>
                </AccessDeniedPopUp>
            </div>
        </div>
    )
}

export default Learning;