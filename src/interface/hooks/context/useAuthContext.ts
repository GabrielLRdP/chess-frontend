import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../context/AuthContext';

const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
};

export default useAuthContext;
