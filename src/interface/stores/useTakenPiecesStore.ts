import { create } from 'zustand';
import { Piece } from '../../domain/entities/piece/Piece';

type takenPiecesState = {
  takenPieces: Piece[];
  setTakenPieces: (pieceList: Piece[]) => void;
};

export const useTakenPiecesStore = create<takenPiecesState>((set) => ({
  takenPieces: [],
  setTakenPieces: (pieceList) => {
    set(() => ({
      takenPieces: pieceList,
    }));
  },
}));
