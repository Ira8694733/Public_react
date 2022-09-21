import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './screens/Users';
import Posts from './screens/Posts'

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Users />} />
                <Route path=":id" element={<Posts />} />
            </Route>
        </Routes>
    );
}

export default App;