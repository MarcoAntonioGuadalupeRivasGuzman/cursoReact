import React from "react";
import { useCounter } from "../Hooks/useCounter";

function CounterHook(){

    const {counter,setCounter} = useCounter();

    return(
        <div>
            <h1>Counter with Hook: {counter} </h1>
            <hr />
            <button onClick={()=>setCounter(counter+1)}>+1</button>
            <button onClick={()=>setCounter(counter-1)}>-1</button>
            <button onClick={()=>setCounter(10)}>Reset</button>
        </div>
    );
}

export default CounterHook;