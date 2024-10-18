import ChessBoard from './components/ChessBoard';
import ChessBoardContextProvider from './context/chessBoardContext';
import './css/main.css';

function App() {
  return (
    <ChessBoardContextProvider>
      <ChessBoard />
    </ChessBoardContextProvider>
  );
}

export default App;
