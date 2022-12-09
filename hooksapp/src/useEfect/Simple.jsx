import React, { useState } from "react";

export const SimpleForm=()=>{

    const [formState, setFormSate] = useState({
        username: 'tony',
        email: 'stark@gamil.com'
    });

    const {username, email}= formState;
    return(
        <div>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
            type="text" 
            placeholder="Username"
            name="username"  
            />

            <input 
            type="text"
            placeholder="Email"
            name="email"
            />

        </div>

    );
}