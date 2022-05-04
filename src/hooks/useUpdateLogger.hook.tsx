import { useEffect } from "react";

export default function useUpdateLogger(value: string | number | null) {
    useEffect(()=>{
        console.log(value);
    }, [value]);
}