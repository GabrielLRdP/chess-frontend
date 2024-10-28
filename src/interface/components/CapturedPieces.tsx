import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';
import positionToIcons from '../functions/positionToIcons';

const CapturedPieces = ({ color }: TakenPiecesProps): ReactElement => {
  const { takenPieces } = useTakenPiecesStore();
  const filteredTakenPieces = takenPieces
    .filter((element) => element.color === color)
    .sort((a, b) => {
      return a.value - b.value;
    });
  const takenPiecesObjects = positionToIcons(filteredTakenPieces);
  const takenPiecesComponents = takenPiecesObjects.map((element) => {
    return <div className='w-3 h-6 text-[20px] '>{element}</div>;
  });

  return (
    <div className='flex gap-[7px] h-[30px] w-[100%]'>
      {takenPiecesComponents}
    </div>
  );
};

export default CapturedPieces;

type TakenPiecesProps = {
  color: Color;
};
