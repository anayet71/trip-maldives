import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";


 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
     
    const authInfo = {
        user,
        setUser,
        auth
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;