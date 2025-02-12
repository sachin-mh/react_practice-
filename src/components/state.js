"use client"
import React from "react"
import { useState } from "react";
  
const States = (props) => {
    const {title} =props;
    let [count, setCount] =useState(1);

    const increment =() =>{
        setCount(count + 1);
    };
    const decrement =()=>{
        setCount ( count-2);
    };
               
    return (
       <div>
       <h1 className="text-6xl"> counter value = {count} </h1>

       <button className="mt-5 bg-slate-500 px-3 py-2 rounded-lg"> increment </button>
       <button className="mt-5 bg-slate-500 px-3 py-2 rounded-lg"> decrement </button>
       </div>
    )
}
export default States