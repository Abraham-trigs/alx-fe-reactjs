import React, { createContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// UserContext Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", email: "" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
