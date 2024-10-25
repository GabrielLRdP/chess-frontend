import { ReactElement } from 'react';

const AllowedMoveOverlay = ({
  isThereAPiece,
}: AllowedMoveOverlayProps): ReactElement => {
  const overlay = isThereAPiece ? (
    <div className='w-8 h-8 border-opacity-30  border-gray-800 border-[3px] rounded-full absolute'></div>
  ) : (
    <div className='w-2 h-2 bg-gray-800 opacity-30 rounded-full absolute'></div>
  );
  return overlay;
};

export default AllowedMoveOverlay;

type AllowedMoveOverlayProps = {
  isThereAPiece: boolean;
};
