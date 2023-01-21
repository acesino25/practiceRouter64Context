import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"


const Layout = () =>{

    
    return(
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout