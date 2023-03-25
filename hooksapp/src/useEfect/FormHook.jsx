import {React, useState} from "react";
import { useForm } from "../Hooks/useForm";


export const FormHook=()=>{

    const {formState,onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })
    
    

    return(
        <div>
            <h1>Formulario con Custom Hook</h1>
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

            <input 
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
            />

            <button onClick={onResetForm}>Limpiar</button>

        </div>
    );

}