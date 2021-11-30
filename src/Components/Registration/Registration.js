import React from 'react';
import './Registratiions.css';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FormFieldset, FormInput, FormLegend, FormLegendTitle, SigninContainer, SigninForm  , Select} from '../Style/Style'
import SignupImg from '../../img/signup_welcome_cats_thqn.svg';


const Registration = () => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        const adminDetail = { 
            name: data.Name,
            email: data.email,
            password: data.password
        }
        fetch('https://sorting-functionality-authlab.herokuapp.com/user/register-use', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminDetail)
        })
        .then(res => res.json())
        .then(user => {
            if(user.success === true){                
                toast.success(user.message, {
                    position: "bottom-right",
                });
                reset();
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
        <SigninContainer>
            <SigninForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormFieldset>
                        <FormLegendTitle>Registration form</FormLegendTitle>

                        <div>
                            <FormLegend>Name:</FormLegend>
                            <FormInput name="Name" type="text" placeholder="Name" 
                            {...register("Name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i})}/>
                            <span style={{color:"red"}}>
                                {errors.Name?.type === 'required' && "Name is required"}
                                {errors?.Name?.type === "maxLength" && 'First name cannot exceed 20 characters'}
                                {errors?.Name?.type === "pattern" && 'Alphabetical characters only'}
                            </span>

                            <FormLegend>Registration no:</FormLegend>
                            <FormInput name="Registration" type="number" placeholder="Name" 
                            {...register("Registration", { required: true, maxLength: 20, minLength:15})}/>
                            <span style={{color:"red"}}>
                                {errors.Registration?.type === 'required' && "Registration number is required"}
                                {errors?.Registration?.type === "maxLength" && 'Registration number maximum 20 digit'}
                                {errors?.Registration?.type === "minLength" && 'Registration number must be 20 digit'}
                            </span>

                            <FormLegend>Mobile no:</FormLegend>
                            <FormInput name="Mobile" type="number" placeholder="Name" 
                            {...register("Mobile", { required: true, maxLength: 11, minLength:11})}/>
                            <span style={{color:"red"}}>
                                {errors.Mobile?.type === 'required' && "Mobile number is required"}
                                {errors?.Mobile?.type === "maxLength" && 'Mobile number maximum 11 digit'}
                                {errors?.Mobile?.type === "minLength" && 'Mobile number must be 11 digit'}
                            </span>


                            <FormLegend>Guardian Mobile no:</FormLegend>
                            <FormInput name="Mobile" type="number" placeholder="Name" 
                            {...register("GuardianMobile", { required: true, maxLength: 11, minLength:11})}/>
                            <span style={{color:"red"}}>
                                {errors.GuardianMobile?.type === 'required' && "Guardian Mobile number is required"}
                                {errors?.GuardianMobile?.type === "maxLength" && 'Mobile number maximum 11 digit'}
                                {errors?.GuardianMobile?.type === "minLength" && 'Mobile number must be 11 digit'}
                            </span>

                            <FormFieldset>
                                <FormLegend>Select Year</FormLegend>
                                <Select name="Year" {...register("Year", { required: true})}>
                                    <optgroup label="Select Year">
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </optgroup>
                                </Select>
                            </FormFieldset>
                            <span style={{color:"red"}}>{errors.Year?.type === 'required' && "Year is required"}</span>

                        </div>
                        
                        <label className="submitBtnAnimation">
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <span className="btnAnimation"></span>
                            <button type="submit" value="Submit">Create an account</button>
                        </label>

                    </FormFieldset>
                </form>
            </SigninForm>
            <img src={SignupImg} alt='Signup Img'/>
            <ToastContainer />

        </SigninContainer>
    );
};

export default Registration;