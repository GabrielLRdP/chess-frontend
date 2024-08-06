import { create } from "zustand";
import { Piece } from "../domain/entities/piece/Piece";

type PositionState = {
  position: Array<Piece>;
  setPosition: (newPosition: Array<Piece>) => void;
};

export const usePositionStore = create<PositionState>((set) => ({
  position: [],
  setPosition: (newPosition) =>
    set(() => ({
      position: newPosition,
    })),
}));
