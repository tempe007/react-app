//custom hook 만들기
import React, { useState } from "react";

const useInput = (initialValue, valid) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;
        if (typeof valid === "function") {
            willUpdate = valid(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};