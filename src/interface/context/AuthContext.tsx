import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { SocketService } from '../../application/services/SocketService';

export interface AuthContextType {
  userData: userData | undefined;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  socketService: SocketService;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const socketService = new SocketService();

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<userData | undefined>(undefined);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    console.log(token);
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
    socketService.connect();
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    socketService.disconnect();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userData, login, logout, socketService }}
    >
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
