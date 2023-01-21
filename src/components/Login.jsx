import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext'

const Login = () => {

  const {user, setUser} = useUserContext(); // destructuramos el objeto que mandamos con el objeto
  const navigate = useNavigate()

    const handleOnclick = () =>{

        if(user.user === null) return console.log('Hey, there is a problem with this user');
        
        setUser({...user, user: !user.user}); // considerando que solo tienes un usuario, pero si tuvieses más debes hacer las debidas comprobaciones hacia ese usuario
        
        if(user.user) navigate('/dashboard');
        console.log(user.user)
        
    }

  return (
    <div>
        <button onClick={handleOnclick}>Just press me to log</button>
    </div>
  )
}

export default Login