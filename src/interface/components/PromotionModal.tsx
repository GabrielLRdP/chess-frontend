import { useGameStore } from '../store/useGameStore';
import PiecePromotionDisplay from './PiecePromotionDisplay';

const PromotionModal = () => {
  const { game } = useGameStore();

  const color = game?.playerTurn;

  const pieceNotations = ['Q', 'R', 'B', 'N'];
  const inconsToDisplay = pieceNotations.map((element) => {
    const coloredNotation = color === 'white' ? element : element.toLowerCase();
    return <PiecePromotionDisplay notation={coloredNotation} />;
  });

  return (
    <div className='absolute w-[100%] h-[100%] z-20 flex justify-center'>
      <div className=' flex items-center justify-evenly absolute w-[80%] h-[20%] top-40 bg-orange-800 rounded-lg'>
        {inconsToDisplay}
      </div>
    </div>
  );
};

export default PromotionModal;
