import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeChessBoardPage from './pages/FreeChessBoardPage/FreeChessBoardPage';
import OnlinePlayersPage from './pages/OnlinePlayersPage/OnlinePlayersPage';
import { AuthContextProvider } from './context/AuthContext';
import AppLayout from './components/layout/appLayout';
import { SocketContextProvider } from './context/SocketContext';
import OnlineGamePage from './pages/OnlineGamePage/OnlineGamePage';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <SocketContextProvider>
          <AppLayout>
            <Routes>
              <Route path='/' element={<FreeChessBoardPage />} />
              <Route path='/players' element={<OnlinePlayersPage />} />
              <Route path='/game' element={<OnlineGamePage />} />
            </Routes>
          </AppLayout>
        </SocketContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
