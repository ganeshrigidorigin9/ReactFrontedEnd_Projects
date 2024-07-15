import { useState,useEffect } from 'react';

export default function Timer({setStop,questionnumber}) {
    const [timer,setTimer]=useState(30);

    useEffect(()=>{
        if(timer === 0) return setStop(true);
        const interval=setInterval(()=>{
            setTimer(timer-1);
        },1000);
        return ()=>clearInterval(interval)
    },[timer]);


    useEffect(()=>{
        setTimer(30);
    },[questionnumber]);

  return timer;
 
}
