import React, { createContext, useState, useContext } from 'react';

const SelectedAuthorContext = createContext();

export const SelectedAuthorProvider = ({ children }) => {
  const [selectedAuthor, setSelectedAuthor] = useState('');

  return (
    <SelectedAuthorContext.Provider value={{ selectedAuthor, setSelectedAuthor }}>
      {children}
    </SelectedAuthorContext.Provider>
  );
};

export const useSelectedAuthor = () => {
  return useContext(SelectedAuthorContext);
};
