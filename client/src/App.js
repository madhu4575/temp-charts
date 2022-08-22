import React from "react";
import { Route } from 'react-router-dom'
import PrivateRoute from './private/PrivateRoute'
import NavBar from './components/NavBar'
import MainPage from './userInfo/MainPage'
import Login from './userInfo/Login'

function App() {
    return (
        <div>
            <NavBar />
            
            <Route path = '/' component={Login} exact />
            <PrivateRoute path = '/MainPage' component = {MainPage} />
        </div>
    )
}

export default App