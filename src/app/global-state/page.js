"use client";

import React,{ use, useState } from "react";
import A from "./components/A";
import { CounterContext } from "@/context/countercontext";

const GlobalState =() => {
    const [count, setCount]= useState(0)
     
    const increment =() =>{
        setCount(count+1);
    };
    return (
        <div>
            Global State page-{count}
            <button className="my=2 py-2 px-3 bg-blue-400"  onClick={increment}>Increment</button>
            {/* <A count={count}/> */}
            <CounterContext.Provider value={count}>
                <A/>
            </CounterContext.Provider>
        </div>
    );
};

export default GlobalState;