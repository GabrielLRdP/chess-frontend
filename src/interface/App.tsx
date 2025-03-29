import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChessboardPage from './pages/chessBoardPage/ChessBoardPage';
import { AuthContextProvider } from './context/AuthContext';
import AppLayout from './components/layout/appLayout';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path='/' element={<ChessboardPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
