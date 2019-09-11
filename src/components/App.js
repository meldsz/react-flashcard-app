import React, { Component } from "react";
import StackList from "./StackList";
import { Link } from "react-router-dom";

export const App = () => {
    return (
        <div>
            <h1>FlashCardPro</h1>
            <hr />
            <StackList />
            <hr />
            <Link to="/stack_form">
                <h2>Create a new Stack</h2>
            </Link>
        </div>
    );
}