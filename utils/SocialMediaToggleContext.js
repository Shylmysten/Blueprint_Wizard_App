'use client'
import React, { createContext, useState } from 'react';

// Create the context
export const SocialMediaToggleContext = createContext();

// Create the provider component
export const SocialMediaToggleProvider = ({ children }) => {
    const [isSocialMediaToggleSwitchOff, setIsSocialMediaToggleSwitchOff] = useState(true);
    //console.log('DropdownToggleContext state updated:', isDropdownToggleSwitchOn);

    return (
        <SocialMediaToggleContext.Provider value={{ isSocialMediaToggleSwitchOff, setIsSocialMediaToggleSwitchOff }}>
            {children}
        </SocialMediaToggleContext.Provider>
    );
};