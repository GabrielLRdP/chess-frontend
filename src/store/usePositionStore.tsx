import { create } from "zustand";
import { Position } from "../shared/types/global_types";

type PositionState = {
  initialPosition: string;
  currentPosition: string;
  selectedCase: Position;
  setPosition: (newPosition: string) => void;
  initPosition: (initialPosition: string) => void;
};

export const usePositionStore = create<PositionState>((set, get) => ({
  initialPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
  currentPosition: "",
  selectedCase: null,

  setPosition: (newPosition) => {
    set(() => ({
      currentPosition: newPosition,
    }));
  },

  initPosition: () => {
    const { initialPosition } = get();
    set(() => ({
      currentPosition: initialPosition,
    }));
  },

  setSelectedCase: (position: Position) => {
    set(() => ({
      selectedCase: position,
    }));
  },
}));
