import {Link} from "react-router-dom";

import "./NavigationBarComponent.css"

function NavigationBarComponent() {
    return (
        <nav>
            <ul id={"menu"}>
                <li>
                    <Link className={"menu-item"} to={"/learn-korean"}>Home</Link>
                </li>
                <li>
                    <Link className={"menu-item"} to={"/learn-korean/dictionary"}>Dictionary</Link>
                </li>
                <li>
                    <Link className={"menu-item"} to={"/learn-korean/learning"}>Learning</Link>
                </li>
                <li>
                    <Link className={"menu-item"} to={"/learn-korean/blog"}>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBarComponent;