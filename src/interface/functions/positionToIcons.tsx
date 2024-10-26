import { PieceIconFactory } from './pieceIconFactory';
import { Board } from '../../shared/types/global_types';
import { ReactElement } from 'react';

const positionToIcons = (initialPosition: Board): (ReactElement | null)[] => {
  const factory = new PieceIconFactory();

  return initialPosition.map((element) => {
    return factory.createIcon(element?.notation || null);
  });
};

export default positionToIcons;
