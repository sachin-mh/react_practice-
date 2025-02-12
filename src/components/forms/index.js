"use client";
import { useState } from "react";
import Input from "./input";

import { useFormik } from "formik";
import { object, string } from "yup";

const schema=object({
    email:string().required("Email is required!!").email("Please Enter a valid mail")

})
const Form = () => {

    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const formik=useFormik({
        initialValues:{
            fullname:"",
            email:"",
            password:"",
            confirmPassword:"",
            country: "",
            state:"",
            street:""
        },
        onSubmit:(value)=>{
            console.log(value)
            if (value.password == value.confirmPassword){
                setShow(true);
            }else{
                alert("Password don't match!!");
                setShow(false);
            }
        },
        validationSchema:schema

    })

    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="grid grid-cols-2 gap-14">
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Registration</h1>
                    <Input label="Full Name :  " type="text" id="fullname" name="fullname" className="border-2" value={formik.values.fullName} onChange={formik.handleChange}
                    ></Input>
                    <br></br>

                    <Input label="Email : " type="email" id="email" name="email" className="border-2" value={formik.values.email} onChange={formik.handleChange}></Input>
                    <br></br>
                    <span className="text-red-700" >{formik.errors.email}</span>

                    <Input label="Password : " type="password" id="password" name="password" className="border-2" value={formik.values.password} onChange={formik.handleChange}></Input>
                    <br></br>
                    <div className="flex items-center justify-start gap-2">
                        <Input label="Confirm-Password" type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" className="border-2" value={formik.values.confirmPassword} onChange={formik.handleChange}></Input>
                        <button type="button" className=" text-black px-1 py-1 rounded-sm" onClick={togglePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>
                    </div>


                    <br></br>

                    <h1>Address</h1>
                    <div className="flex ">
                        <div>
                            <Input label="country" type="text" id="country" name="country" className="border-2" value={formik.values.country} onChange={formik.handleChange}></Input>
                        </div>
                        <div>
                            <Input label="state" type="text" id="state" name="state" className="border-2" value={formik.values.state} onChange={formik.handleChange}></Input>
                        </div>
                        <div>
                            <Input label="street" type="text" id="street" name="street" className="border-2" value={formik.values.street} onChange={formik.handleChange}></Input>
                        </div>
                    </div>

                    <button className="bg-primary px-2 py-1">Submit</button>

                </form>
            </div>
            {show && (
                <div>
                    <h1>Form Details</h1>
                    <h2>Full Name : {formik.values.fullName}</h2>
                    <h2>Email : {formik.values.email}</h2>
                    <h2>Password : {formik.values.password}</h2>
                    <h2>Confirm Password : {formik.values.confirmPassword}</h2>
                    <h2>Address</h2>
                    <h2>Country: {formik.values.country}</h2>
                    <h2>State: {formik.values.state}</h2>
                    <h2>Street: {formik.values.street}</h2>
                </div>
            )}
        </div>
    )
}

export default Form;
