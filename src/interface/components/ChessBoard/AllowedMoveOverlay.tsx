import { ReactElement } from 'react';

const AllowedMoveOverlay = ({
  isThereAPiece,
}: AllowedMoveOverlayProps): ReactElement => {
  const overlay = isThereAPiece ? (
    <div className='w-12 h-12 border-opacity-40  border-gray-800 border-[6px] rounded-full absolute'></div>
  ) : (
    <div className='w-4 h-4 bg-gray-800 opacity-40 rounded-full absolute'></div>
  );
  return overlay;
};

export default AllowedMoveOverlay;

type AllowedMoveOverlayProps = {
  isThereAPiece: boolean;
};
