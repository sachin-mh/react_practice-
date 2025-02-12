"use client";

import React from "react";

const promiseData =new Promise(( resolve, reject) => {
    setTimeout(() => {
       if(2+2==5){
        resolve("success");
       } else{
        reject ("failed");

       }
    },3000 );
});
promiseData
.then((value)=>{
    console.log(value,"Promise is resolved");
})
.catch((error)=>{
    console.log(error,"promise is rejected");
});

const Async =() => {
    return <div>async</div>;
};
export default Async;






