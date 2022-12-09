import React from "react";
import { useCounter } from "../Hooks/useCounter";

function CounterHook(){

    const {counter,increment, decrement, rework} = useCounter();

    return(
        <div>
            <h1>Counter with Hook: {counter} </h1>
            <hr />
            <button onClick={()=>increment()}>+1</button>
            <button onClick={()=>decrement()}>-1</button>
            <button onClick={()=>rework()}>Reset</button>
        </div>
    );
}

export default CounterHook;