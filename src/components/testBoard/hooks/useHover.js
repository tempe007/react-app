import React,{useRef,useEffect} from "react";
//useClick
const useHover = (onHover) => {

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenther", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenther", onHover);
            }
        };
    },[]);
    const element = useRef();
    if(typeof onHover !== 'function'){
        return;
    }
    return element;
};