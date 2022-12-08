import React from "react";
import Counter from "./useState/Counter";
import CounterHook from "./useState/CounterHook";

function HooksApp(){
    return(
        <div>
            <h1>HooksApp</h1>
            <Counter />
            <CounterHook />
        </div>
    );
}

export default HooksApp;