import React,{useRef,useEffect} from "react";
//usePreventLeave
export const usePreventLeave = ()=>{
    const listner = (e)=>{
        e.preventDefault();
        e.returnValue = "";
    }
    const enablePrevent =()=> {
        window.addEventListener("beforeunload",listner);
    }
    const disnablePrevent =()=> {
        window.removeEventListener("beforeunload",listner);
    }
    return {enablePrevent,disnablePrevent};
}