import React,{useRef,useEffect,useState} from "react";
//useNetwork
export const useNetwork = (onChange)=>{
    const [status ,setStatus] = useState(navigator.onLine);
    const handelChange = (e)=>{
        if(typeof onChange !== "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.online)
    }
    useEffect(()=>{
        window.addEventListener("online",handelChange);
        window.addEventListener("offline",handelChange);

        window.removeEventListener("online",handelChange);
        window.removeEventListener("offline",handelChange);

    },[]);
    return status
}