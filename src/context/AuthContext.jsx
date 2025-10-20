import { createContext, useState } from 'react';

export const AuthContext = createContext();

const getInitialState = () => {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialState);

    const login = async (credentials) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const userData = {
            id: new Date().getTime(),
            name: credentials.name,
            email: credentials.email,
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        return true;
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};