import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";
import MyProvider from './providers/MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyProvider>
            <App />
        </MyProvider>
    </React.StrictMode>
);


