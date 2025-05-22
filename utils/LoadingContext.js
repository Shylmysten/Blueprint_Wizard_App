'use client';
import React, { createContext, useState } from 'react';

// Create the context
export const LoadingContext = createContext();

// Create the provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  //console.log('Loading Provider: ',isLoading);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};