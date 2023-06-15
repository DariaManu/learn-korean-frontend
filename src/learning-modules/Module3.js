import {useNavigate} from "react-router-dom";
import NavigationBarComponent from "../component/NavigationBarComponent";

import "./Module.css"

function Module3(props) {
    console.log(props.moduleName);
    const moduleName = props.moduleName;
    const navigate = useNavigate();

    return (
        <div>
            <NavigationBarComponent/>

            <div className={"module-content-div"}>
                <h1>{moduleName}</h1>

                <p>
                    Koreans understand that food is not just for nutrition but also for mental and emotional well-being.
                    Sometimes they even use questions like 밥 먹었어요?, which translate to "Have you eaten?", as a form of greeting.
                    In the west, if somebody greeted you like this you might think that they want to invite you to lunch or dinner, but in Korea
                    it is genuinely a way of showing to the other person that you care about them and their wellbeing.
                    <br/><br/>
                    Korean culture places a lot of importance on sharing food. In Korea banchan (Korean side dishes)
                    sharing is a feature on the table at mealtimes and so meals are naturally more communal. Banchan are
                    lots of little side dishes spread across the table. Every Korean dining table looks like there is a
                    party taking place — full of variation and colour. While meals are communal, it’s rude to keep going
                    back and forth to the dishes. Take enough food each time, don’t double-dip and don’t eat directly
                    from the serving plates.
                    In a restaurant in Korea, you don’t even have to order banchan, they’ll automatically
                    bring out a selection — and it’ll always include kimchi (more on Korean kimchi culture later).
                    Banchan includes vegetable dishes, seafood, seasoned eggs and sometimes meat. What’s more, banchan
                    in restaurants is usually included for free and you can often simply ask for a refill! There is sometimes
                    a communal grill in the middle of the table for grilling your own meat.
                </p>

                <div>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz`)}>Take quiz</button>
                    <button onClick={() => navigate(`/learn-korean/learning/${moduleName}/quiz/history`)}>Show quiz history</button>
                </div>
            </div>

        </div>
    )
}

export default Module3;