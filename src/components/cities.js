"use client"
import React from "react";
import { useState } from "react";

const Cities = () => {
    let [city, setCity] = useState();

    const ktm = () => {
        setCity("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5d/cb/pashupatinath-kathmandu.jpg?w=1200&h=1200&s=1");
    }

    const lalit = () => {
        setCity("https://incredibleasia.org/wp-content/uploads/2023/07/patan-5790080_1920.webp");
    }

    const pok = () => {
        setCity("https://www.acethehimalaya.com/wp-content/uploads/2024/02/things-to-do-in-pokhara.jpg.webp");
    }
    return (
        <div>
            <img src={city} className="h-[600px] w-[600px] m-10" alt="city"></img>
            <p>Cities</p>
            <button onClick={ktm} className="mt-5 bg-red-400 text-cyan-50 px-4 py-2 rounded-lx"> Kathmandu </button>
            <button onClick={lalit} className="mt-5 bg-emerald-500 text-cyan-50 px-4 py-2 rounded-lx"> Lalitpur </button>
            <button onClick={pok} className="mt-5 bg-blue-500 text-cyan-50 px-4 py-2 rounded-lx">  Pokhara </button>
         
        </div>
    );
}
export default Cities;