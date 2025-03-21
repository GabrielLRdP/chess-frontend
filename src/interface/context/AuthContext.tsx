import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface AuthContextType {
  userName: string | undefined;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      logout();
      return;
    }
    try {
      const decoded: tokenType = jwtDecode(token);
      setUserName(decoded.userName);
      login();
    } catch (error) {
      logout();
    }
  }, [isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

type tokenType = {
  userName: string;
};
