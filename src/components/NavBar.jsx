import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

const NavBar = () => {

    const {user, setUser} = useUserContext()

    useEffect(()=>{
      console.log('has changed to ' + user.user)
    },[user])
  
    return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        {
            !user.user ?  <NavLink to='/login'><h3>You must log in</h3></NavLink> : <NavLink to='/dashboard'>Dashboard</NavLink>
        }
        
    </nav>
  )
}

export default NavBar