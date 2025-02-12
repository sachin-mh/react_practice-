import React from "react";
const Input =({ lable,  ...props})=>{
     return (
        <div>
            <lable htmlFor={props.id}>{lable}</lable>
            <input className=" border border-blue-400"{...props}/>
        </div>
     )
};
export default Input;