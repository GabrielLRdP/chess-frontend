import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useEffect, useState } from 'react';
export interface AuthContextType {
  userData: userData | undefined;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<userData | undefined>(undefined);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      logout();
      return;
    }
    try {
      const decoded: tokenType = jwtDecode(token);
      setUserData({ userName: decoded.userName, userId: decoded.userId });

      !isAuthenticated && login();
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
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

type tokenType = {
  iat: number;
  userName: string;
  userId: string;
};

type userData = {
  userName: string;
  userId: string;
};
