import { createContext, ReactNode, useState } from 'react';

// Création du contexte
const ChessBoardContext = createContext({});

// Provider pour le contexte
const ChessBoardContextProvider = ({ children }: { children: ReactNode }) => {
  const [caseSize, setCaseSize] = useState(10);

  return (
    <ChessBoardContext.Provider value={{ caseSize, setCaseSize }}>
      {children}
    </ChessBoardContext.Provider>
  );
};

export default ChessBoardContextProvider;
