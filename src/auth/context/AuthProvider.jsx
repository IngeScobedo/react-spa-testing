import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer';
import { types } from '../types/types';

export const AuthProvider = ({ children }) => {

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        
        return {
            logged: !!user,
            user: user
        }
    }

    const [state, dispatch] = useReducer(authReducer, {}, init)
    const handleLogin = (email = '', pwd = '') => {

        const user = {
            id: 1,
            email,
            pwd,
            name: 'Alan Escobedo'
        }

        const action = {
            type: types.login,
            payload: user
        }
        
        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        const action = { type: types.logout }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            state,
            login: handleLogin,
            logout: handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
