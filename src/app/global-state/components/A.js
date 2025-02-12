import React from "react";
import  B from "./B";


const A =(props) =>{
    return(
        <div>
            A Component -{props.count}
            <B count={props.count}/>
        </div>
    )
}
export default A;