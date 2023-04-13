import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'

const useLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
        
    

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === data.email && user.password === data.password);
        if (user) {
            localStorage.setItem("user", JSON.stringify({...user, password:""}));
            dispatch(login({...user, password:""}));
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };
    return (
        {
            register,
            handleSubmit,
            errors,
            onSubmit
        }
    )
}

export default useLogin