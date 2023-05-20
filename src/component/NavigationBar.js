import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/learn-korean"}>Home</Link>
                </li>
                <li>
                    <Link to={"/learn-korean/dictionary"}>Dictionary</Link>
                </li>
                <li>
                    <Link to={"/learn-korean/learning"}>Learning</Link>
                </li>
                <li>
                    <Link to={"/learn-korean/blog"}>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;