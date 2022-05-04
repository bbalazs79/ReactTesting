import { useEffect, useState } from "react";

function getSavedValue(key: string = 'key', initialValue: string | Function) {
    const savedValue = JSON.parse(localStorage.getItem(key) || '{}');

    if(savedValue) return savedValue;
    if(initialValue instanceof Function) return initialValue();

    return initialValue;
}

export default function useLocalStorage(key: string, initialValue: string): Array<any> {
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, initialValue);
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]);

    return [value, setValue];
}