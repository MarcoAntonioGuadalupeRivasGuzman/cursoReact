import { useState } from "react";

export const useForm=(initialForm={})=>{

    const [formState, setFormSate] = useState(initialForm);

    const onInputChange=({target})=>{
        const {name, value}=target;
        //console.log(name, value);
        setFormSate({
            ...formState, [name]:value
        });
    }

    const onResetForm=()=>{
        setFormSate(initialForm);
    }

    return {
        ...formState, //esta linea manda la destructuracion del objeto formstate
        formState,
        onInputChange,
        onResetForm,
    }
}