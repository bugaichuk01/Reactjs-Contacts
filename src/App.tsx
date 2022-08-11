import React from 'react';
import './App.css';
import ContactsPage from "./pages/contactsPage/ContactsPage";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
    const isAuth = !!localStorage.getItem("authenticate")

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={isAuth ? <ContactsPage/> : <Navigate replace to='/login'/>}/>
                <Route path={'/login'} element={!isAuth ? <LoginPage/> : <Navigate replace to='/'/>}/>
            </Routes>
        </div>
    );
}

export default App;
