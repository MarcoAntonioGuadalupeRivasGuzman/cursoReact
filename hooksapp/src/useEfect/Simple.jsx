import React, { useEffect, useState } from "react";
import { Message } from "./message";

export const SimpleForm=()=>{

    const [formState, setFormSate] = useState({
        username: 'tony',
        email: 'stark@gamil.com'
    });

    const {username, email}= formState;

    const onInputChange=({target})=>{
        const {name, value}=target;
        //console.log(name, value);
        setFormSate({
            ...formState, [name]:value
        });
    }

    useEffect(()=>{ //el primer argumento es la funcion que se va a ejecutar cada que se llama el useEfect
        //console.log('useEffec called!');
    },[]); // el segundo argumento son las dependencias del useEfect

    useEffect(()=>{
        //console.log('username changed!');
    },[username]);

    useEffect(()=>{
        //console.log('email changed!');
    },[email]);


    return(
        <div>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
            type="text" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}  
            />

            <input 
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
            />
            {(username === 'tony')&&<Message />}

        </div>

    );
}