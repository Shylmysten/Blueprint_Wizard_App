'use client'
import React, { createContext, useState } from 'react';

// Create the context
export const DropdownToggleContext = createContext();

// Create the provider component
export const DropdownToggleProvider = ({ children }) => {
    const [isDropdownToggleSwitchOn, setIsDropdownToggleSwitchOn] = useState(false);
    //console.log('DropdownToggleContext state updated:', isDropdownToggleSwitchOn);

    return (
        <DropdownToggleContext.Provider value={{ isDropdownToggleSwitchOn, setIsDropdownToggleSwitchOn }}>
            {children}
        </DropdownToggleContext.Provider>
    );
};