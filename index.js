import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
    return (
        <div className="app">
            <header/>
        </div>
    )
}

const header = () => {
    return (
        <div className="header">
        <div className="logo">
        </div>
        <img src="online-food-delivery-industry-min.jpg"/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(heading);