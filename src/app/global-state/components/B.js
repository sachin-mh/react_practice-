import React from "react";
import  C from "./C ";


const B =(props) =>{
    return(
        <div>
            B Component -{props.count}
            <C count={props.count}/>
        </div>
    );
};
export default B;