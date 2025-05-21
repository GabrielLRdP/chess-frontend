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
    <div className='w-3 h-6 text-[20px]' key={Math.random()}>
      {element}
    </div>
  ));

  return (
    <div className='flex justify-between w-full pt-2 pb-1'>
      <div className='flex gap-[7px] h-[30px]'>{takenPiecesComponents}</div>
      {game && (
        <div
          className={`${backGroundColor} rounded h-[20px] w-[16px] shadow animate-pulse`}
        />
      )}
    </div>
  );
};

export default InfoSection;

type TakenPiecesProps = {
  color: Color;
};
