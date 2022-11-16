import React, { useState, useEffect } from "react";
function useDebounce(value: any, delay: number = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value)


    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebouncedValue(debouncedValue)
        }, delay)
        return () => {
            if (handler) {
                clearTimeout(handler)
            }
        }
    }, [value, delay])
    return debouncedValue
}


export default useDebounce