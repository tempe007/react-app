import React,{useRef,useEffect} from "react";
//useBeforeLeave
export const useBeforeLeave = (onBefore)=>{
    const handle =(e)=>{
        onBefore();
    }
    useEffect(()=>{
        document.addEventListener('mouseleave',handle);
        return ()=> document.removeEventListener('mouseleave',handle);
    },[]);
    if(typeof onBefore !== 'function')return;
};