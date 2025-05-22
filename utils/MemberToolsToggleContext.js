'use client'
import React, { createContext, useState } from 'react';

// Create the context
export const MemberToolsToggleContext = createContext();

// Create the provider component
export const MemberToolsToggleProvider = ({ children }) => {
    const [isMemberToolsToggleSwitchOff, setIsMemberToolsToggleSwitchOff] = useState(true);
    //console.log('DropdownToggleContext state updated:', isDropdownToggleSwitchOn);

    return (
        <MemberToolsToggleContext.Provider value={{ isMemberToolsToggleSwitchOff, setIsMemberToolsToggleSwitchOff }}>
            {children}
        </MemberToolsToggleContext.Provider>
    );
};