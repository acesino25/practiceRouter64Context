import { useEffect } from "react"
import { useUserContext } from "../context/userContext"

import { Outlet, useNavigate } from "react-router-dom"

const LayoutForbidden = () =>{

    const navigate = useNavigate();

    const {user} = useUserContext()

    useEffect(()=>{

        if(user.user === null || user.user === '' || user.user === false){
            navigate('/')
        }

    }, [user])

    return(
        <><Outlet></Outlet></>
    )
}

export default LayoutForbidden