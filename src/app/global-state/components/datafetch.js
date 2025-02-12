"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Datafetch = () => {
    const [product, setproduct] = useState(null);

    const fetchData = () => {
        const response = axios.get("https://fakestoreapi.com/products");


        response
            .then((value) => {
                setproduct(value.data);
            }).catch((error) => {
                console.log(error, "error");
            });
    };
    useEffect(()=>{
        fetchData();
    }); [];


    const Datafetch = () => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            fetchData();
            console.log("First")
        }, []);

        return (
            <div className='my-10'>
                Datafetch={count}
                <button onClick={() => {
                    setCount(count + 1);
                }}>Increment</button>
            </div>
        )
    }
}

export default Datafetch;


