import React,{useRef,useEffect} from "react";
export const useConfirm = (message,onConfirm,onCancel) => {
    const confirmAction = ()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm(message)){
            onConfirm();
        }else{
            onCancel();
        }
    }
    if(!onConfirm ||typeof onConfirm !== 'function'){
        return;
    }
    if(!onCancel ||typeof onCancel !== 'function'){
        return;
    }
    return confirmAction;
}
