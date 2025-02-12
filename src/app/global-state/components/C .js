import { CounterContext } from "@/context/countercontext";
import React,{useContext} from "react";


const C =() =>{
    const value = useContext(CounterContext)
    return(
        <div>
            C Component -{value}
            
        </div>
    );
};
export default C;