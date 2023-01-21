import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()

// As strange as it sounds, when you call 
// userContext, you will be able to use
// 'userProvider' as a parent component

const UserProvider = ({children}) => {

    const objetoPrueba = {
        user: false    
    }

    const [user, setUser] = useState(objetoPrueba);

    return(
        // In this way, the UserProvider, as parent
        // can pass to its children the states as an object
        // and we pass them as an object, to later on
        // use destructuring
        <UserContext.Provider value={{user, setUser}}>
            {
                // when working with parent components
                // we have access to its children with the
                // {} 
            
                children

            }  
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = () =>  useContext(UserContext);

