import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Dictionary from "./pages/Dictionary";
import Learning from "./pages/Learning";
import Blog from "./pages/Blog";
import {useState} from "react";
import {UserContext} from "./context/UserContext";
import Module1 from "./learning-modules/Module1";
import Module2 from "./learning-modules/Module2";
import QuizPage from "./pages/QuizPage";
import QuizHistoryPage from "./pages/QuizHistoryPage";
import AuthProvider from "./context/AuthProvider";
import Module3 from "./learning-modules/Module3";
import UserInfoComponent from "./component/UserInfoComponent";
import AppHeaderComponent from "./component/AppHeaderComponent";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppHeaderComponent/>
                <UserInfoComponent/>
                <Routes>
                    <Route path={"/"} element={<Register/>}></Route>
                    <Route path={"/login"} element={<Register/>}></Route>
                    <Route path={"/learn-korean"} element={<HomePage/>}></Route>
                    <Route path={"/learn-korean/dictionary"} element={<Dictionary/>}></Route>
                    <Route path={"/learn-korean/learning"} element={<Learning/>}></Route>

                    <Route path={"/learn-korean/learning/module1"} element={<Module1 moduleName={"module1"}/>}></Route>
                    <Route path={"/learn-korean/learning/module2"} element={<Module2 moduleName={"module2"}/>}></Route>
                    <Route path={"/learn-korean/learning/module3"} element={<Module3 moduleName={"module3"}/>}></Route>

                    <Route path={"/learn-korean/learning/:moduleName/quiz"} element={<QuizPage/>}></Route>
                    <Route path={"/learn-korean/learning/:moduleName/quiz/history"} element={<QuizHistoryPage/>}></Route>

                    <Route path={"/learn-korean/blog"} element={<Blog/>}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
