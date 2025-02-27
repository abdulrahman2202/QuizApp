// context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const demoUser  = {
    email: 'demo@example.com',
    password: 'password123',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const login = (email, password) => {
        if (email === demoUser .email && password === demoUser .password) {
            setUser ({ email });
            return true; // Login successful
        }
        return false; // Login failed
    };

    const signup = (email, password) => {
        // For demo purposes, we won't actually store users
        setUser ({ email });
        return true; // Signup successful
    };

    const logout = () => {
        setUser (null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};