import React from "react";
import { SimpleForm } from "./useEfect/Simple";
import Counter from "./useState/Counter";
import CounterHook from "./useState/CounterHook";

function HooksApp(){
    return(
        <div>
            <h1>HooksApp</h1>
            <Counter />
            <CounterHook />
            <SimpleForm />
        </div>
    );
}

export default HooksApp;