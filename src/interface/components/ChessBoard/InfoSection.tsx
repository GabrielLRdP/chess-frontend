import { ReactElement } from 'react';
import { Color } from '../../../shared/types/global_types';
import { useTakenPiecesStore } from '../../stores/useTakenPiecesStore';
import positionToIcons from '../../functions/positionToIcons';
import { useGameStore } from '../../stores/useGameStore';
import { toggleColor } from '../../../shared/utils/toggleColor';

const InfoSection = ({ color }: TakenPiecesProps): ReactElement => {
  const { game } = useGameStore();
  const { takenPieces } = useTakenPiecesStore();

  let backGroundColor = '';
  if (game?.playerTurn === toggleColor(color)) {
    backGroundColor = toggleColor(color) === 'white' ? 'bg-white' : 'bg-black';
  }

  const filteredTakenPieces = takenPieces
    .filter((element) => element.color === color)
    .sort((a, b) => a.value - b.value);

  const takenPiecesObjects = positionToIcons(filteredTakenPieces);
  const takenPiecesComponents = takenPiecesObjects.map((element) => (
    <div
      className='w-5 h-7 text-[22px] flex items-center justify-center bg-white/70 rounded shadow-sm border border-primary-darker'
      key={Math.random()}
    >
      {element}
    </div>
  ));

  return (
    <div className='flex justify-between items-center w-full pt-2 pb-1 px-2 bg-secondary/60 rounded-lg shadow-sm mb-2'>
      <div className='flex gap-2 h-[32px]'>{takenPiecesComponents}</div>
      {game && (
        <div
          className={`${backGroundColor} rounded-full h-[22px] w-[22px] shadow-lg border-2 border-tertiary animate-pulse ring-2 ring-tertiary/40`}
        />
      )}
    </div>
  );
};

export default InfoSection;

type TakenPiecesProps = {
  color: Color;
};
