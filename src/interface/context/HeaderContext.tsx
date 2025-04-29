import { createContext, ReactNode, useState } from 'react';

export interface HeaderContextType {
  isSignupModalOpen: boolean;
  isLoginModalOpen: boolean;
  setIsSignupModalOpen: (val: boolean) => void;
  setIsLoginModalOpen: (val: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

const HeaderContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        isSignupModalOpen,
        setIsSignupModalOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderContextProvider };
