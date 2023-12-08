import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="Header">
            <div className="logo">logo</div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>cart</li>
            </ul>
        </div>
        </div>
    );
};

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(<AppLayout/>);