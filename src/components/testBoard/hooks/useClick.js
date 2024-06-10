import React,{useRef,useEffect} from "react";
//useClick
const useClick = (onClick) => {

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    },[]);
    const element = useRef();
    if(typeof onClick !== 'function'){
        return;
    }
    return element;
};