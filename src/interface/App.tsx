import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChessboardPage from './Pages/chessBoardPage/ChessBoardPage';
import Header from './components/header/Header';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ChessboardPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
