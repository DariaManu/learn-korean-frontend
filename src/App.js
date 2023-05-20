import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Dictionary from "./pages/Dictionary";
import Learning from "./pages/Learning";
import Blog from "./pages/Blog";
import {useState} from "react";
import {UserContext} from "./context/UserContext";

function App() {
    const [user, setUser] = useState({
        id: null,
        username: null,
        progressLevel: null
    });

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path={"/"} element={<Register/>}></Route>
                    <Route path={"/login"} element={<Register/>}></Route>
                    <Route path={"/learn-korean"} element={<HomePage/>}></Route>
                    <Route path={"/learn-korean/dictionary"} element={<Dictionary/>}></Route>
                    <Route path={"/learn-korean/learning"} element={<Learning/>}></Route>
                    <Route path={"/learn-korean/blog"} element={<Blog/>}></Route>

                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
