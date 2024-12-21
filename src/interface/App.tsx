import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChessboardPage from './Pages/chessBoardPage/ChessBoardPage';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ChessboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
