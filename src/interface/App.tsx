import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeChessboardPage from './pages/freeChessBoardPage/FreeChessBoardPage';
import OnlinePlayersPage from './pages/onlinePlayersPage/OnlinePlayersPage';
import { AuthContextProvider } from './context/AuthContext';
import AppLayout from './components/layout/appLayout';
import { SocketContextProvider } from './context/SocketContext';

function App() {
  return (
    <AuthContextProvider>
      <SocketContextProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path='/' element={<FreeChessboardPage />} />
              <Route path='/players' element={<OnlinePlayersPage />} />
            </Routes>
          </AppLayout>
        </Router>
      </SocketContextProvider>
    </AuthContextProvider>
  );
}

export default App;
