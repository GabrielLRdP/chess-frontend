import ChessBoard from './components/ChessBoard';
import { ChessBoardProvider } from './context/chessBoardContext';
import './css/main.css';

function App() {
  return (
    <ChessBoardProvider>
      <ChessBoard />
    </ChessBoardProvider>
  );
}

export default App;
