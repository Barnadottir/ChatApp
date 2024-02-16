import { NextOrObserver, onAuthStateChanged, User } from 'firebase/auth';
import React, {useState, useEffect, useContext, createContext, ReactNode } from 'react'
import { auth } from '../Firebase';

type AuthContextType = {
    currentUser: User | null,
    isLoading: boolean,
}
type AuthProviderType = {
    children: JSX.Element
}
const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    isLoading: true,
});
const useAuth = () => useContext(AuthContext)
const AuthProvider = ({ children }: AuthProviderType): JSX.Element => {
    const [currentUser,setCurrentUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            // only runs after all the components have been rendered
            // adds an observer that listens to changes in the user data
            setCurrentUser(user);
            setIsLoading(false);
        })
        return unsubscribe;
    },[])

    return (
        <AuthContext.Provider value = {{ currentUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, useAuth }