import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';
import positionToIcons from '../functions/positionToIcons';

const CapturedPieces = ({ color }: TakenPiecesProps): ReactElement => {
  const { takenPieces } = useTakenPiecesStore();
  const filteredTakenPieces = takenPieces.filter(
    (element) => element.color === color
  );
  const takenPiecesObjects = positionToIcons(filteredTakenPieces);
  const takenPiecesComponents = takenPiecesObjects.map((element) => {
    return <div className='w-6 h-6 text-[20px] '>{element}</div>;
  });

  return (
    <div className='flex gap-1 h-[30px] w-[100%]'>{takenPiecesComponents}</div>
  );
};

export default CapturedPieces;

type TakenPiecesProps = {
  color: Color;
};
