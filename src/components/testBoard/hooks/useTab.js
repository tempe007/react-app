//custom hook 만들기
import { useState } from "react";

const useTabs = (initalTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initalTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};