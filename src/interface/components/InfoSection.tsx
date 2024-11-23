import { ReactElement } from 'react';
import { Color } from '../../shared/types/global_types';
import { useTakenPiecesStore } from '../store/useTakenPiecesStore';
import positionToIcons from '../functions/positionToIcons';
import { useGameStore } from '../store/useGameStore';
import { toggleColor } from '../../shared/utils/toggleColor';

const InfoSection = ({ color }: TakenPiecesProps): ReactElement => {
  const { game } = useGameStore();
  const { takenPieces } = useTakenPiecesStore();

  const backGroundColor =
    game?.playerTurn === toggleColor(color) ? toggleColor(color) : null;
  const filteredTakenPieces = takenPieces
    .filter((element) => element.color === color)
    .sort((a, b) => {
      return a.value - b.value;
    });
  const takenPiecesObjects = positionToIcons(filteredTakenPieces);
  const takenPiecesComponents = takenPiecesObjects.map((element) => {
    return (
      <div className='w-3 h-6 text-[20px] ' key={Math.random()}>
        {element}
      </div>
    );
  });

  return (
    <div className='flex justify-between w-[100%] pt-2 pb-1'>
      <div className='flex gap-[7px] h-[30px] '>{takenPiecesComponents}</div>
      {game && (
        <div
          className={`bg-${backGroundColor} rounded-full h-[15px] w-[15px] p-[10px]`}
        ></div>
      )}
    </div>
  );
};

export default InfoSection;

type TakenPiecesProps = {
  color: Color;
};
