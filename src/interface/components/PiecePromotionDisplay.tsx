import { usePromotionStore } from '../store/usePromotionStore';
import { PieceIconFactory } from '../functions/pieceIconFactory';

const PiecePromotionDisplay = ({ notation }: PiecePromotionDisplayType) => {
  const { setPromotionChoice } = usePromotionStore();
  const icons = new PieceIconFactory();
  return (
    <div
      className='text-[50px] hover:bg-orange-950 rounded-md p-5 h-[70%]'
      onClick={() => {
        console.log('click');
        setPromotionChoice(notation);
      }}
    >
      {icons.createIcon(notation, 'flex items-center')}
    </div>
  );
};
type PiecePromotionDisplayType = { notation: string };
export default PiecePromotionDisplay;
