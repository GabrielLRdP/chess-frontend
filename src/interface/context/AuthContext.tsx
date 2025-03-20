import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface AuthContextType {
  userName: string | undefined;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    try {
      const decoded: tokenType = jwtDecode(token);
      setUserName(decoded.userName);
      setIsAuthenticated(true);
    } catch (error) {
      logout();
    }
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

type tokenType = {
  userName: string;
};
