import { useState,useEffect } from "react"

export const useInternetStatus =()=>{
    const [status , setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline" , ()=>{
            setStatus(false)
        })
        window.addEventListener("online" , ()=>{
            setStatus(true)
        })
    },[])

    return status
}