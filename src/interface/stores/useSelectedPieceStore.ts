import { create } from "zustand";
import { Piece } from "../../domain/entities/piece/Piece";

type selectedPieceType = {
  selectedPiece: Piece | null;
  setSelectedPiece: (piece: Piece | null) => void;
};
export const useSelectedPieceStore = create<selectedPieceType>((set) => ({
  selectedPiece: null,
  setSelectedPiece: (piece) => {
    set(() => ({
      selectedPiece: piece,
    }));
  },
}));
