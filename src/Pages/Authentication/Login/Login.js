import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "../../../App.js";
import loginsvg from '../../../img/signup_welcome_cats_thqn.svg';
import {firebaseConfig} from "../../../firebase.config";

import { useForm } from 'react-hook-form';
import { FormFieldset, FormInput, FormLegend, FormLegendTitle, SigninContainer, SigninForm } from "../../../Components/Style/Style.js";
// import { toast } from 'react-toastify';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let { from } = location.state || { from: { pathEmail: "/" } };
    const { user, setUser } = useContext(userContext);


    const onSubmit = (data) => {
        const loginDetail = { 
            email: data.email,
            password: data.password
        }
        fetch('https://sorting-functionality-authlab.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetail)
        })
        .then(res => res.json())
        .then(user => {
            
            if(user.success === true){                
                toast.success(user.message, {
                    position: "bottom-right",
                });
                sessionStorage.setItem('user', JSON.stringify(user));
                setUser(user)
                history.replace(from);
            } else {
                toast.error(user.message, {
                    position: "bottom-right",
                });
            }
        })
        .catch(err => {
            toast.error(err, {
                position: "bottom-right",
            });
        }) 
    }


    return (
        <div>
            <SigninContainer>
                <SigninForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Login</FormLegendTitle>

                            <div>
                                <FormLegend>Email:</FormLegend>
                                <FormInput Email="Email" type="text" placeholder="Email" 
                                {...register("Email", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}/>
                                <span style={{color:"red"}}>
                                    {errors.Email?.type === 'required' && "Email is required"}
                                    {errors?.Email?.type === "maxLength" && 'First Email cannot exceed 20 characters'}
                                    {errors?.Email?.type === "pattern" && 'Alphabetical characters only'}
                                </span>

                                <FormLegend>Password:</FormLegend>
                                <FormInput Email="Password" type="password" placeholder="Password.." 
                                {...register("Password", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}/>
                                <span style={{color:"red"}}>
                                    {errors.Password?.type === 'required' && "Password is required"}
                                    {errors?.Password?.type === "maxLength" && 'First Email cannot exceed 20 characters'}
                                    {errors?.Password?.type === "pattern" && 'Alphabetical characters only'}
                                </span>
                            </div>
                            
                            <label className="submitBtnAnimation">
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <button type="submit" value="Submit">Login</button>
                            </label>

                        </FormFieldset>
                    </form>
                </SigninForm>
                <div>
                    <img src={loginsvg} alt="lioigiiin" />
                </div>
            </SigninContainer>
            <ToastContainer />
        </div>
    );
};

export default Login;
