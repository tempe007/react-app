import React,{ useState } from "react";
import {current} from "@reduxjs/toolkit";

/*
const App = ()=>{
    const [counter,setCounter] = useState(0);
    const updateCounter = () => {
        setCounter((current) => current +1);
    }
    return (
        <div>
            <h3>total count {counter}</h3>
            <button onClick={updateCounter}>click me</button>
        </div>
    );
}
*/

const MinToHours = ()=> {
    const [amount,setAmount] = useState(0);
    const [flip,setFlip] = useState(false);
    const onChange = (e)=>{
        setAmount(e.target.value);
        console.log(e);
        console.log(e.target.value);
    }
    const onFlip = ()=>{
        setFlip(current => !current);
    }
    return (
        <div>
            <label htmlFor={"minutes"}>minutes</label>
            <input disabled={flip} onChange={onChange} id={"minutes"} value={amount} placeholder={"minutes"} type={"number"}/>
            <label htmlFor={"hours"}>hours</label>
            <input disabled={!flip} onChange={onChange} id={"minutes"} value={flip?amount:Math.round(amount/60)} placeholder={"hours"} type={"number"}/>
            <button onClick={onFlip}>flip</button>
        </div>
    );
}
const KmToMiles = ()=>{
    return (
        <h3>Km 2 MM</h3>
    );
}
const App = ()=> {
    return (
        <div>
            <h3>super converter</h3>
            <MinToHours/>
        </div>
    );
}
export default App;
