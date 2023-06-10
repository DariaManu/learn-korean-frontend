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
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sit amet ligula luctus dapibus. Praesent erat sem, congue vel vestibulum ut, blandit at felis. Praesent aliquam neque et fringilla accumsan. Vestibulum sed justo interdum magna placerat feugiat ut vel libero. Aliquam aliquet blandit rhoncus. Nulla vel sem mi. Duis non dictum risus. Nunc diam sapien, porta at purus interdum, scelerisque posuere diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum ante velit, elementum tincidunt enim scelerisque sit amet. Fusce hendrerit nec ex in convallis. Fusce justo ex, scelerisque ac erat ac, feugiat convallis ante.

                    Nunc et justo odio. Fusce tincidunt libero ac ipsum convallis, sed lacinia tortor vulputate. In sed lacus quis dui condimentum tincidunt. Etiam finibus ligula quis orci varius tristique. Vestibulum velit nisi, gravida quis elementum id, malesuada non arcu. Duis tempus leo eget purus fermentum pulvinar. Vivamus rutrum vulputate dapibus. Phasellus semper bibendum diam, a hendrerit enim congue et. Aliquam in tellus sem.

                    Maecenas vitae sapien erat. Morbi volutpat vel metus eget placerat. Morbi quis cursus tellus. Vivamus ut mauris vel dui maximus feugiat. Nullam vestibulum felis eu mauris lacinia mattis. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec est id libero tempus sollicitudin sed quis nisi. Nam semper a orci et congue.

                    Praesent blandit, ex sed luctus aliquet, nunc arcu fermentum enim, id dapibus nulla nibh ut ipsum. Donec nec massa porta eros mattis tincidunt eget a ligula. Nunc pulvinar felis nulla, et feugiat velit blandit in. Mauris et mattis ante. Vivamus a dolor a eros malesuada aliquam et consectetur neque. Sed lorem velit, maximus sed lacus ac, venenatis interdum odio. Donec malesuada ac diam ac volutpat. Nulla efficitur sollicitudin placerat. Nulla non eros ac eros dictum malesuada. Maecenas nec mauris scelerisque, pretium neque vel, cursus purus. Ut ut commodo ante, volutpat interdum lorem. Maecenas at vulputate libero, nec dapibus orci. Sed molestie urna tellus, a dapibus enim dignissim a. Morbi in leo odio. Pellentesque vestibulum augue pharetra interdum suscipit. Quisque ullamcorper, libero sit amet pellentesque aliquet, arcu metus sagittis odio, et mattis libero velit at mi.

                    Morbi sit amet urna posuere, laoreet turpis in, mattis magna. Pellentesque mollis justo sit amet metus hendrerit, eu dapibus dui consectetur. Fusce non nisl ut augue feugiat eleifend vel et libero. Duis convallis ornare ultrices. Duis ornare elit eget mattis dignissim. Ut ac porta purus. Maecenas a ex dictum, vehicula nulla eget, rhoncus dui. Ut feugiat quis risus eleifend condimentum. Praesent id consequat elit. Integer sollicitudin congue nulla sed cursus. Integer scelerisque sagittis erat at convallis. Aenean maximus, lacus a efficitur varius, ipsum libero blandit ex, at blandit nisi ligula sed sem. Donec lacus leo, pellentesque in lorem id, interdum pulvinar nisl.
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